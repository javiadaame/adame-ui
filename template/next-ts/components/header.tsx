import { site } from "@/config/site"

export function Header() {
    return (
        <div className="flex bg-stone-200 w-full items-center justify-center">
            <div className="grid gap-1 text-center">
                <h1 className="text-5xl font-extrabold tracking-wide text-slate-900">
                    {site.name}
                </h1>
                <p className="text-base text-slate-700">
                    {site.description}
                </p>
            </div>
        </div>
    )
}