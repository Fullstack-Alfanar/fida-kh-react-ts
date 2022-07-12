import { ChangeEvent, useState } from 'react';
import './App.css';
import { loginClass } from './components/loginClass';
export interface values{
  newValue:string;
}
function App() {
  const person=new loginClass();
  const [newEmail,setEmail]=useState("");
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>)=> {
    setEmail(e.target.value);
 }
 const [newPassword,setPassword]=useState("");
 const handleChangePassword = (e: ChangeEvent<HTMLInputElement>)=> {
   setPassword(e.target.value);
}

  return (
    <div className="App">
      <h1> LOG IN</h1>
      <header className="App-header">
        {/* <form > */}
        <div>
          <label>Email : </label>
          <input  type={"email"} placeholder=" enter your email" onChange={handleChangeEmail}></input>
          {/* <EmailValidtion email={newValue}/> */}
        </div>
        <div>
          <label>Password : </label>
          <input type={"text"} placeholder=" enter your Password" onChange={handleChangePassword}></input>
        </div>
        <div>
          <button type="submit" onClick={(()=>{
            console.log(person.checkEmail(newEmail));
            console.log(person.checkPass(newPassword));
            console.log(person.checUser(person.checkEmail(newEmail),person.checkPass(newPassword)));
          })}> Log In </button>
        </div>
        {/* </form> */}
      </header>
    </div>
  );
}

export default App;
