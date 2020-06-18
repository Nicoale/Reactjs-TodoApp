import React, {useState} from 'react'
import { render } from '@testing-library/react';



function Login(){
    const [user, setUser]= useState({
        Email: 'ashley@example.com' , 
        Password: 'StringPassword12'
    }
    );
        const change = (e) =>{
            setUser({
                Email: 'wanja@example.com' , 
                Password: 'Str0ngPassword22'
            }
            
            );
        };
return(
    <div>
        <form>
            <h2>Logins page</h2><br/>
                <label>
                    Email:
                    <input type="text" name="email"/> <br/>
                    Password:
                    <input type="password" name="password"/><br/>
                </label>
                <br/><input type="submit" value="Submit" onSubmit={change} />         
            </form>
        </div>
);

}


export default Login;