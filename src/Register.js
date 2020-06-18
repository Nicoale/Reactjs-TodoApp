import React  from 'react';
import './App.css';
import Login from './login';


function Register (){ 
    
    
    return (
        <div className="register"> 
                <form>
                <h2>Registrations page</h2><br/>
                    <label>
                        Email:
                        <input type="text" name="email"/> <br/>
                        Password:
                        <input type="password" name="password"/><br/>
                        Confirm Password:
                        <input type="password" name="confirm password"/>
                    </label>
                    <br/><input type="submit" value="Submit" />         
                </form>
                <Login/>
            </div>
         
         )
};

export default Register;
// const [Email, setEmail]=useState(false);
// const [Password, setPassword]=useState(Stringpassword12);