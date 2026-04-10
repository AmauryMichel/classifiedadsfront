import { useNavigate } from "react-router";

import type { Route } from "../auth/+types/register";

import { AuthentificationService } from "~/services/authentification-service";
import { User } from "~/types/user";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register" },
    { name: "description", content: "Register Page" },
  ];
}

let authentificationService: AuthentificationService = new AuthentificationService

export default function Register() {
  let navigate = useNavigate();

  const registerUser = (event: any) => {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value
    const first_name = event.target.firstname.value
    const last_name = event.target.lastname.value
    const newUser = new User(email, first_name, last_name, password)

    authentificationService.register(newUser).then(response => {
      navigate('/login')
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
