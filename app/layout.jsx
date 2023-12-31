import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Nav from '@/components/nav'
import PostPop from '@/components/postpop'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cat Commu',
  description: 'Generated by create next app',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dracula">
      <body className={`bg-base-300 ${inter.className}`}>
        <Nav/><PostPop/>
        {children}</body>
    </html>
  )
}
