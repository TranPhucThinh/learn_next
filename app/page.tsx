'use client'

import { Metadata } from 'next'
import { useRouter } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Next.js',
}

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  const router = useRouter()
  return (
    <>
      <button type="button" onClick={() => router.push('/dashboard')}>
        Dashboard
      </button>
    </>
  )
}
