// src/app/api/captcha/route.ts
import { NextResponse } from 'next/server'
import svgCaptcha from 'svg-captcha'
import { z } from 'zod'

// Define Zod schema and TypeScript type
export const CaptchaSchema = z.object({
  svg: z.string(),
  text: z.string(),
})

export type CaptchaResponse = z.infer<typeof CaptchaSchema>

// GET handler for /api/captcha
export async function GET(): Promise<NextResponse<CaptchaResponse>> {
  const captcha = svgCaptcha.create({
    noise: 2,
    color: true,
    background: '#f2f2f2',
  })

  const response: CaptchaResponse = {
    svg: captcha.data,
    text: captcha.text,
  }

  return NextResponse.json(response)
}
