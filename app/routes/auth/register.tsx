import type { Route } from "../auth/+types/register";

import { User } from "~/types/user";

import { AuthentificationService } from "~/services/authentification-service";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register" },
    { name: "description", content: "Register Page" },
  ];
}

let authentificationService: AuthentificationService = new AuthentificationService

export default function Register() {
  const registerUser = (event: any) => {
    event.preventDefault()

    let email = event.target.email.value
    let password = event.target.password.value
    let first_name = event.target.firstname.value
    let last_name = event.target.lastname.value
    let newUser = new User(email, first_name, last_name, password)

    authentificationService.register(newUser).then(response => {
      console.log(response.data.results)
    })
  }

  return (
    <div>
      <h2>Create a new account</h2> 
      <form className="formClass" onSubmit={registerUser}>
        <input className="formInput" id="email" type="email" placeholder="Email Address" required/>
        <input className="formInput" id="password" type="password" placeholder="Password" required/>
        <input className="formInput" id="firstname" type="text" placeholder="First Name" required/>
        <input className="formInput" id="lastname" type="text" placeholder="Last Name" required/>
        
        <button className="submitButton" type="submit">Submit</button>
      </form>
  </div>
  )
}
