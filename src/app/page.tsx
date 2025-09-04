
import { SignedIn , SignOutButton,SignedOut, SignUpButton, UserButton } from "@clerk/nextjs"


export default function Home() {
  return (
  <div>
    <SignUpButton/>

    <SignOutButton/>
    
  </div>
  )
}
