import Link from "next/link"

const MainNavigation = () => {
  return (
    <header className="h-20">
        <nav className="h-full">
            <ul className="flex justify-between items-center h-full mx-12">
                <li><Link href={"/"}>Where in the world?</Link></li>
                <li>Dark Mode</li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation