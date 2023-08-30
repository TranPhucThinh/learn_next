'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface NavLinks {
  href: string
  name: string
}

interface NavLinksProps {
  navLinks: NavLinks[]
}

export function Navigation({ navLinks }: NavLinksProps) {
  const pathname = usePathname()

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href

        return (
          <Link
            className={isActive ? 'text-blue' : 'text-black'}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </>
  )
}
