import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="container max-w-[1360px] mx-auto  flex justify-between pt-4 pb-4 items-center   ">
    <div>
      <img src="/image/header-logo.svg" alt="Logo" />
    </div>
    <ul className="flex gap-4 ">
      <li><Link href="/">Bosh sahifa  </Link></li>
      <li><Link href="/xizmatlar">Xizmatlar</Link></li>
      <li><Link href="/portfolio">Portfolio</Link></li>
      <li><a href="">Jamoa</a></li>
      <li><a href="">Blog</a></li>
      <li><a href="">Kontaktlar</a></li>
      <li><a className="px-4 py-2 bg-blue rounded-lg text-white" href="">+998 90 921 37 11</a></li>
    </ul>

  </div>
  )
}

export default Header
