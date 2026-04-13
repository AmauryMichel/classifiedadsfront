import type { Route } from "./+types/login";

import { AuthentificationService } from "~/services/authentification-service";
import { UserLogin } from "~/types/userLogin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Login Page" },
  ];
}

let authentificationService: AuthentificationService = new AuthentificationService

export default function Login() {

  const login = (event: any) => {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value
    const newUser = new UserLogin(email, password)

    authentificationService.login(newUser).then(response => {
      const newToken = response.data['access']
      localStorage.setItem("token", newToken)
    })
  }

  return (
    <div>
      <h2>Login to your account</h2> 
      <form className="formClass" onSubmit={login}>
        <input className="formInput" id="email" type="email" placeholder="Email Address" required/>
        <input className="formInput" id="password" type="password" placeholder="Password" required/>
        
        <button className="submitButton" type="submit">Submit</button>
      </form>
  </div>
  )
}
