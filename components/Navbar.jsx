import Link from "next/link"
import UserInfoBar from "./UserInfoBar"

export default function Navbar({ session, siteName }) {
  return (
    <nav className={"flex justify-between w-screen max-w-full"}>
        <Link href="/">
          <a>
            <h1>{siteName}</h1>
          </a>
        </Link>
        <UserInfoBar session={session} />
    </nav>
  )
}

