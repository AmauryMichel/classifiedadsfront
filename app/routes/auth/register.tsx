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
  return (
    <div>
      <h2>Create a new account</h2> 
      <form className="formClass">
        <input className="formInput" id="username" type="email" placeholder="Email Address" required/>
        <input className="formInput" id="password" type="password" placeholder="Password" required/>
        <input className="formInput" id="firstname" type="text" placeholder="First Name" required/>
        <input className="formInput" id="lastname" type="text" placeholder="Last Name" required/>
        
        <button className="submitButton" type="submit">Submit</button>
      </form>

      <button>Test Back</button>
  </div>
  )
}
