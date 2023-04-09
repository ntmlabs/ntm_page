import Header from "./Header"
import Footer from "./Footer"
import GradientBackground from "./GradientBackground"

export default function Layout({children}) {
    let links = [
        {
            label: 'Projects',
            route: '/projects',
        },
        {
            label: "About",
            route: "/contactus"
        },
        {
            label: "Create",
            route: '/create',
            hero: true
        }
    ]
    return (
        <div className="font-custom grid grid-rows-3">
            <GradientBackground />
            <Header links={links} title={"NTM"} tagline={"labs"}></Header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </div>

    )
}