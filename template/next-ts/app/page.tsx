import Link from "next/link";
import { Header } from "@/components"

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center py-5 select-none space-y-3">
        <h1 className="text-3xl font-bold text-[#fc2d2d]">Currently in development</h1>
        <p className="text-base text-slate-600">More information on</p>
      </div>
    </>
  )
}
