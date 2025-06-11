import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Firm Pools & Spa - Premium Pool Construction & Maintenance | GTA',
  description: 'Expert pool construction, renovation & maintenance services in Toronto, Mississauga & GTA. 20+ years experience creating luxury aquatic environments. Call (416) 717-2750',
  keywords: 'pool construction Toronto, pool maintenance GTA, pool renovation Mississauga, luxury pools Ontario',
  authors: [{ name: 'Firm Pools & Spa' }],
  creator: 'Firm Pools & Spa',
  publisher: 'Firm Pools & Spa',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon/safari-pinned-tab.svg', color: '#0f172a' }
    ]
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.firmpoolsandspa.com',
    title: 'Firm Pools & Spa - Premium Pool Construction & Maintenance | GTA',
    description: 'Expert pool construction, renovation & maintenance services in Toronto, Mississauga & GTA. 20+ years experience creating luxury aquatic environments.',
    siteName: 'Firm Pools & Spa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Firm Pools & Spa - Premium Pool Construction & Maintenance | GTA',
    description: 'Expert pool construction, renovation & maintenance services in Toronto, Mississauga & GTA. 20+ years experience creating luxury aquatic environments.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
