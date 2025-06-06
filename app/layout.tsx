import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Firm Pools & Spa - Premium Pool Construction & Maintenance | GTA',
  description: 'Expert pool construction, renovation & maintenance services in Toronto, Mississauga & GTA. 20+ years experience creating luxury aquatic environments. Call (416) 717-2750',
  keywords: 'pool construction Toronto, pool maintenance GTA, spa installation, pool renovation Mississauga, luxury pools Ontario',
  authors: [{ name: 'Firm Pools & Spa' }],
  creator: 'Firm Pools & Spa',
  publisher: 'Firm Pools & Spa',
  robots: 'index, follow',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover'
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
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
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <style dangerouslySetInnerHTML={{
          __html: `
            html, body {
              background-color: #ffffff !important;
              overscroll-behavior: none !important;
            }
            
            * {
              -webkit-tap-highlight-color: rgba(0,0,0,0) !important;
              -webkit-touch-callout: none !important;
            }
            
            @media screen and (max-width: 768px) {
              body {
                background-color: #ffffff !important;
              }
              
              .bg-slate-900, .bg-gray-900 {
                background-color: #0f172a !important;
              }
              
              .bg-white {
                background-color: #ffffff !important;
              }
              
              .bg-card {
                background-color: #ffffff !important;
              }
              
              .bg-yellow-50, .bg-amber-50 {
                background-color: #ffffff !important;
              }
            }
          `
        }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
