import Link from "next/link";

export default function Header({ links, title, tagline }) {

    let linkElements = links.map(link => 
        (
        <li key={link.route} className={link.hero ? "is-hero": ""}><Link href={link.route}>{link.label}</Link></li>
        )
        )
    return (
        <header className="py-2 px-4 flex justify-between items-center">
            <figure className="flex items-end">
                <h1 className="text-4xl text-slate-800 font-semibold">
                    {title}
                </h1>
                <h6 className="text-slate-600 font-semibold">
                    {tagline}
                </h6>
            </figure>
            <nav>
                <ul className="flex gap-6 text-slate-500 font-medium text-lg items-center">
                    {linkElements}
                </ul>
            </nav>
        </header>
    )
}