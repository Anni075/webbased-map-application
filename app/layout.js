import './globals.css'
import { Inter } from 'next/font/google'

//components
import Header from "./components/Header"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'web-based map application',
  description: 'map application for studies about CSR and SSR',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
