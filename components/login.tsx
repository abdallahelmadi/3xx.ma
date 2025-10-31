"use client"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { IconGoogle, IconX, IconLoader, IconLogOut } from "@/icons"
import { useSession, signIn, signOut } from "next-auth/react"
import { Skeleton } from "@/components/ui/skeleton"

export default function Login({
  open,
  close
}: {
  open: boolean
  close: (b: boolean) => void
}): React.JSX.Element {

  const { data: session, status } = useSession()
  const [loading, setLoading] = useState<[boolean, boolean]>([false, false])

  return (
    <div
      className={`${open ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-200 ease-linear
        fixed w-full min-h-screen inset-0 z-1 flex items-center justify-center bg-[#11151873] backdrop-blur-xs px-4`}
      onClick={e => { close(e.target !== e.currentTarget) }}
    >

      <div className="bg-white w-full max-w-[380px] h-auto p-5 rounded-xs shadow-md">
        {
          status === "loading" ? (
            // `shadcn/ui`: https://ui.shadcn.com/docs/components/skeleton
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          ): (
            !session ? (
              <>
                <p className="text-[18px] font-medium"> Hello, </p>
                <span className="text-[12px] text-[#555] -leading-2">
                  Use your Google or another service to continue with 3xx.
                </span>
                <div className="mt-6 flex flex-col gap-3">
                  <button
                    className="w-full h-10 border border-[#ddd] rounded-xs flex items-center justify-center
                      gap-2 cursor-pointer hover:bg-[#f7f7f7] transition select-none"
                    onClick={() => {
                      setLoading([true, false])
                      signIn("google").finally(() => {
                        setLoading([false, false])
                      })
                    }}
                  >
                    {!loading[0] ?
                      <>
                        <IconGoogle size={18} />
                        <span className="mt-0.5"> Continue with Google </span>
                      </>
                      : <IconLoader />
                    }
                  </button>
                  <button
                    className="w-full h-10 border border-[#ddd] rounded-xs flex items-center justify-center
                      gap-2 cursor-pointer hover:bg-[#f7f7f7] transition select-none"
                    onClick={() => {
                      setLoading([false, true])
                      signIn("twitter").finally(() => {
                        setLoading([false, false])
                      })
                    }}
                  >
                    {!loading[1] ?
                      <>
                        <IconX />
                        <span className="mt-0.5"> Continue with X </span>
                      </>
                      : <IconLoader />
                    }
                  </button>
                </div>
                <div className="text-[10px] mt-4">
                  By continuing, you agree to our
                  <Link href="/terms-of-services" className="text-blue-900"> Terms of Service</Link>. <br/>
                  Read our <Link href="/privacy-policy" className="text-blue-900">Privacy Policy</Link>.
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-[50%] overflow-hidden">
                      <Skeleton className="h-14 w-14 z-1 absolute left-0 top-0" />
                      <Image
                        src={session.user?.image || "./3xx.svg"}
                        width={56}
                        height={56}
                        alt=" "
                        className="absolute left-0 top-0 z-2"
                        draggable={false}
                        quality={100}
                        priority
                      />
                    </div>
                    { session.user?.name &&
                      <div className="flex flex-col">
                        <span className="font-medium text-[15px]"> {session.user.name} </span>
                        <span className="text-[12px] text-[#555]"> {session.user.email || "no email"} </span>
                      </div>
                    }
                  </div>
                  <button onClick={() => signOut()} className="cursor-pointer w-8 h-8 items-center justify-center flex rounded-[50%]">
                    <IconLogOut size={18} color="red" />
                  </button>
                </div>
                <div className="mt-4">
                  ...
                </div>
              </>
            )
          )
        }
      </div>

    </div>
  )
}