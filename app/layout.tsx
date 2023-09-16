import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cookies!',
  description: 'The sweetest game ever',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script src="./node_modules/pixi.js/dist/pixi.min.js"></script>
        {children}
      </body>
    </html>
  )
}
