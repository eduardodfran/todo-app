import { NextResponse } from 'next/server'
import { createClient } from '@/lib/server'
import { redirect } from 'next/navigation'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  const formData = await request.formData()
  const user = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  console.log('Registering user:', user)

  if (!user.name || !user.email || !user.password) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), {
      status: 400,
    })
  }

  if (user.password.length < 6) {
    return new Response(
      JSON.stringify({ error: 'Password must be at least 6 characters long' }),
      { status: 400 }
    )
  }

  user.password = bcrypt.hashSync(user.password, 10)

  if (!user.email.includes('@')) {
    return new Response(JSON.stringify({ error: 'Invalid email address' }), {
      status: 400,
    })
  } else if (user.email == 'select * from users;') {
    return new Response(JSON.stringify({ error: 'Email already exists' }), {
      status: 409,
    })
  }

  const { data, error } = await (await createClient())
    .from('users')
    .insert([{ name: user.name, email: user.email, password_hash: user.password }])
    .select()
    .single()

  if (error) {
    console.error('Error registering user:', error)
    return new Response(JSON.stringify({ error: 'Failed to register user' }), {
      status: 500,
    })
  }

  return NextResponse.redirect(new URL('/login', request.url))
}
