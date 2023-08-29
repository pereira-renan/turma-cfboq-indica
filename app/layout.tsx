'use client'

import '@/styles/globals.css'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { fontSans } from '@/config/fonts'
import { Providers } from './providers'
import { Navbar } from '@/components/navbar'
import { Link } from '@nextui-org/link'
import clsx from 'clsx'
import { Divider } from '@nextui-org/react'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <div className="flex items-center gap-1 text-current">
                Criado por{' '}
                <Link
                  isExternal
                  href="https://www.github.com/pereira-renan/"
                  title="aka Justin Medeiros"
                >
                  <span className="text-primary">Renan Pereira</span>
                </Link>
              </div>
              <Divider className="mx-3" orientation="vertical" />
              <div className="flex items-center gap-1 text-current">
                Mantido pelos{' '}
                <Link
                  isExternal
                  href="https://www.instagram.com/crossfitboqueirao/"
                  title="CrossFit Boqueirão"
                >
                  <span className="text-primary">alunos da CFBOQ</span>
                </Link>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
