import './globals.css'

export const metadata = {
  title: 'Project 1 - Email/Password Auth',
  description: 'Email and Password Authentication with Neon PostgreSQL',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
