import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Webhook Test Runner — Test Webhooks Locally Without ngrok',
  description: 'Simulate Stripe webhook events locally with proper signatures and timing. Built for SaaS developers building payment systems.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cdbcd78d-096a-408e-a70b-5298f0de65ee"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
