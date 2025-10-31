"use client"
import Link from "next/link"
import { IconGoogle, IconX, IconGlobe } from "@/icons"

export default function Login({
  open,
  close
}: {
  open: boolean
  close: (b: boolean) => void
}): React.JSX.Element {
  return (
    <div
      className={`${open ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-300 ease-linear
        fixed w-full min-h-screen inset-0 z-1 flex items-center justify-center bg-[#11151873] backdrop-blur-xs px-4`}
      onClick={e => { close(e.target !== e.currentTarget) }}
    >

      <div className="bg-white w-full max-w-[380px] h-auto p-5 rounded-xs shadow-md">
        <>
          <p className="text-[18px] font-medium"> Hello, </p>
          <span className="text-[12px] text-[#555] -leading-2">
            Use your Google or another service to continue with 3xx.
          </span>
          <div className="mt-6 flex flex-col gap-3">
            <div className="w-full h-10 border border-[#ddd] rounded-xs flex items-center justify-center
              gap-2 cursor-pointer hover:bg-[#f7f7f7] transition select-none">
              <IconGoogle size={18} />
              <span className="mt-0.5"> Continue with Google </span>
            </div>
            <div className="w-full h-10 border border-[#ddd] rounded-xs flex items-center justify-center
              gap-2 cursor-pointer hover:bg-[#f7f7f7] transition select-none">
              <IconX />
              <span className="mt-0.5"> Continue with X </span>
            </div>
            <div className="w-full h-10 border border-[#ddd] rounded-xs flex items-center justify-center
              gap-2 cursor-pointer hover:bg-[#f7f7f7] transition select-none">
              <IconGlobe color="#444" />
              <span className="mt-0.5"> Continue as Guest </span>
            </div>
          </div>
          <div className="text-[10px] mt-4">
            By continuing, you agree to our
            <Link href="/terms-of-services" className="text-blue-900"> Terms of Service</Link>. <br/>
            Read our <Link href="/privacy-policy" className="text-blue-900">Privacy Policy</Link>.
          </div>
        </>
      </div>

    </div>
  )
}