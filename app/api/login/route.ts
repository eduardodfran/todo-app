import { createClient } from '@/lib/client'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  const form = await request.formData()
  const email = form.get('email') as string
  const password = form.get('password') as string

  if (!email || !password) {
    return new Response('Email and password are required', { status: 400 })
  }

  if (!email.includes('@')) {
    return new Response('Invalid email format', { status: 400 })
  }

  if (password.length < 6) {
    return new Response('Password must be at least 6 characters long', {
      status: 400,
    })
  }

  const { data, error } = await (await createClient())
    .from('users')
    .select('id, email, password_hash')
    .eq('email', email)
    .single()

  if (error || !data) {
    return NextResponse.redirect(
      new URL('/login?error=User+not+found', request.url)
    )
  }

  const ok = bcrypt.compareSync(password, data.password_hash)
  if (!ok) {
    return new Response('Invalid password', { status: 401 })
  }

  return NextResponse.redirect(new URL(`/todos/${data.id}`, request.url))
}
