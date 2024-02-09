import Link from "next/link";


export default function Nav() {
  return (
    <header className="flex h-16 w-full items-center px-4 md:px-6">
      <Link className="mr-6 flex items-center" href="#">
        <span className="text-xl">Midjourney Styler</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Home
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Destinations
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Tours
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Contact
        </Link>
      </nav>
    </header>
  )
}
