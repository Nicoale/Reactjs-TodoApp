import React from 'react';
import './App.css'


function Register (){
    const register = () => {
        console.log("Hi there");
      };
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
        </div>
    );
}

export default Register;