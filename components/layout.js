import Header from "./Header"
import Footer from "./Footer"
import GradientBackground from "./GradientBackground"

export default function Layout({ children }) {
    let links = [
        {
            label: "About",
            route: "/contact"
        },
        {
            label: "Create",
            route: '/create',
            hero: true
        }
    ]
    return (
        <div className="font-custom">
            <GradientBackground />
            <Header links={links} title={"NTM"} tagline={"labs"}></Header>
            <main className="p-4">
                {children}
            </main>
            <Footer></Footer>
        </div>

    )
}