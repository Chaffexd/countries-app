import Link from "next/link"
import Toggle from "../UI/Toggle"

const MainNavigation = () => {
  return (
    <header className="h-20 dark:bg-gray-700 dark:text-white">
        <nav className="h-full">
            <ul className="flex justify-between items-center h-full mx-12">
                <li><Link href={"/"}>Where in the world?</Link></li>
                <Toggle />
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation