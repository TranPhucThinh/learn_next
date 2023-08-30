import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <aside>Aside Marketing</aside>
      {children}
    </>
  )
}

export default RootLayout
