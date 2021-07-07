import { providers, signIn, getSession, csrfToken } from "next-auth/client";

export default function SignIn({providers, csrfToken}) {
  return (
    <div className={"flex flex-col items-center justify-center gap-2"}>
      <h1>Custom Sign In Page</h1>
      <form action="/api/auth/signin/email" method="post">
        <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
        <label htmlFor="">Email Address
        <input type="text" id="email" name="email" />
        </label>
      </form>
      {Object.values(providers).map((provider) => {
        if (provider.name === "Email") {
          return
        }
        return (
          <div key={provider.name}>
            {" "}
            <button 
              onClick={()=> signIn(provider.id)}
            >
              Sign in with {provider.name}
            </button>
          </div>
        )
      })}
    </div>
  )
}

SignIn.getInitialProps = async (context) => {
  const {req, res} = context
  const session = await getSession({req})

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    })
    res.end()
    return
  }
  return {
    session: undefined,
    providers: await providers(context),
    csrfToken: await csrfToken(context), //email signIn only...
  }
}
