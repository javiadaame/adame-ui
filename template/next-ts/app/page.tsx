import { Components, Card } from "@/components"
export default function Home() {
  return (
    <>
      <section className="grid items-center justify-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] select-none">
            React Components<br className="hidden sm:inline" />
            built for personal use.
          </h1>
          <p className="max-w-[750px] text-lg text-slate-700 sm:text-xl select-none">
            Own component library
          </p>
        </div>

        {Components.data.map((c) => (
          <Card key={c.title} title={c.title}>{c.demo}</Card>
        ))}

      </section>
    </>
  )
}
