import { site } from "@/config/site"

export default function Head() {
    return (
        <>
            <title>{`${site.name} - ${site.description}`}</title>
            <meta charSet="utf-8" />
            <meta name="description" content={site.description} />
            <link rel="manifest" href="/site.webmanifest" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={site.name} />
            <meta property="og:description" content={site.description} />
            <meta name="twitter:title" content={site.name} />
            <meta name="twitter:description" content={site.description} />
            <meta name="twitter:card" content="summary_large_image" />
        </>
    )
}