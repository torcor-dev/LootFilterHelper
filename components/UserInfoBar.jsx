import { signIn, signOut } from "next-auth/client"
import Image from "next/image"

export default function UserInfoBar({ session }) {
  if (!session) {
    return (
      <div>
       <button className={"text-gray-50"} onClick={signIn}>Sign in</button>  
      </div>
    )
  }

  return (
    <div className={"flex flex-row gap-1"}>
     <Image
       src={session.user.image}
       alt="User avatar"
       width={25}
       height={25}
       className={"rounded-full"}
     />
      <p className={"text-blue-200"}>{session.user.name}</p>
      <button className={"text-gray-50"} onClick={signOut}>Sign out</button>  
    </div>
  )

}


