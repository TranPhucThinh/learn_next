import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <aside>Aside Shop</aside>
      {children}
    </>
  )
}

export default RootLayout
