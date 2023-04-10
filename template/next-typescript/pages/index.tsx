import Link from "next/link"
import Head from "next/head"

import { Layout } from "@/components/layout"
import { Button, variants } from "@/components/adame-ui/button"

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>Next.js built with Designed Components.</title>
        <meta
          name="description"
          content="Next.js template"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container grid m-5 items-center gap-6 pt-6 pb-8 md:py-10 select-none">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Designed components
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 sm:text-xl">
            Customizable components to React.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/"
            target="_blank"
            rel="noreferrer"
            className={variants({ size: "lg", margin: "none" })}
          >
            Components
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/javiadaame/adame-ui"
            className={variants({ variant: "default", size: "lg", margin: "none" })}
          >
            GitHub
          </Link>
        </div>
      </section>
    </Layout>
  )
}
