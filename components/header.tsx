"use client"
import Image from "next/image"
import Link from "next/link"
import { IconCart, IconUser } from "@/icons"
import { useState } from "react"
import Login from "./login"

export default function Header(): React.JSX.Element {

  const [emptyCart, setEmptyCart] = useState<boolean>(false)
  const [loginOpen, setLoginOpen] = useState<boolean>(false)
  const [cartOpen, setCartOpen]   = useState<boolean>(false)

  return (
    <header className="flex flex-col">

      <Login open={loginOpen} close={setLoginOpen} />

      <div className="h-10 w-full flex items-center justify-between border-b border-b-[#0000001A] px-4 text-[12px]">
        <span> Free shipping </span>
        <div className="flex items-center gap-3 justify-center">
          <button className="cursor-pointer w-8 h-8 items-center justify-center flex rounded-[50%]" onClick={() => setLoginOpen(true)}>
            <IconUser />
          </button>
          <button className="relative cursor-pointer  w-8 h-8 items-center justify-center flex rounded-[50%]">
            <IconCart />
            { !emptyCart && <div className="absolute w-1.75 h-1.75 rounded-[50%] bg-green-400 top-1.5 right-1"/> }
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Link href="/">
          <Image
            src="./3xx.svg"
            width={96}
            height={96}
            alt=" "
            draggable={false}
            quality={100}
            priority
          />
        </Link>
      </div>

    </header>
  )
}