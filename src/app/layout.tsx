import type { Metadata } from 'next'
import './globals.css'
import { Figtree } from 'next/font/google'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Fametonic - Turn Social Media Into a Profitable Career',
  description:
    'Start your journey to becoming a successful social media influencer with Fametonic. Get personalized insights and expert-led courses.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  )
}
