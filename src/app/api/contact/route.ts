import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, whatsapp, country, message } = await req.json()

    // guard rails
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const html = `
      <h2>NEXTSTEP Inquiry</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>WhatsApp:</b> ${whatsapp}</p>
      <p><b>Country:</b> ${country}</p>
      <p><b>Message:</b><br/>${message?.replace(/\n/g, '<br/>')}</p>
    `

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'consultant.ns.nextstep@gmail.com',
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
  }
}
