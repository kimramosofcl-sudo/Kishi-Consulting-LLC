import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kishi Consulting - Expert Financial Advisory Services',
  description: 'Professional finance and accounting consulting services including SOX compliance, risk assessment, and financial advisory.',
  keywords: 'financial consulting, SOX compliance, accounting services, risk assessment, business advisory',
  authors: [{ name: 'Kishi Consulting' }],
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-primary">
        {children}
      </body>
    </html>
  )
}
