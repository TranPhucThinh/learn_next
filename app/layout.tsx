import { Navigation } from './ui/Navigation'

const navLinks = [
  {
    href: '/new-post',
    name: 'New Post',
  },
  {
    href: '/contact',
    name: 'Contact',
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation navLinks={navLinks} />
        <br />
        {children}
        <footer>footer</footer>
      </body>
    </html>
  )
}
