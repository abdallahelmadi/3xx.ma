"use client"
import Image from "next/image"
import Link from "next/link"

export default function Header(): React.JSX.Element {
  return (
    <header className="flex flex-col">

      <div className="h-10 w-full flex items-center justify-between border-b border-b-[#0000001A] px-4">
        <p> Free shipping </p>
        <span> [...] </span>
      </div>

      <div className="flex items-center justify-center">
        <Link href="/">
          <Image
            src="./3xx.svg"
            width={96}
            height={96}
            alt=""
            draggable={false}
            quality={100}
            priority
          />
        </Link>
      </div>

    </header>
  )
}