import { Be_Vietnam_Pro } from 'next/font/google'
import './globals.css'

const bvp = Be_Vietnam_Pro({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bvp.className}>{children}</body>
    </html>
  )
}
