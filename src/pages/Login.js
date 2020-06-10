import React, {useState} from 'react'
import {Form,Button} from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import store from '../pages/store'
import {useHistory} from 'react-router-dom'
export default function Login() {
    
    let history = useHistory()
    const dispatch = useDispatch();
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    
    const login = (e) => {
        e.preventDefault();
        if(!email  || !password){
            return
         }
        let user = { email: email, password: password };
        
        dispatch({ type: "LOGIN", payload: user });
        
        history.push("/");
      };
    return (
        <div>
            <div className="login" onSubmit={(e) => {login(e)}}>
                <div className="logoLogin">
                    <img style={{marginTop:10}} width="108" height="42" src="https://itviec.com/assets/logo-itviec-65afac80e92140efa459545bc1c042ff4275f8f197535f147ed7614c2000ab0f.png"></img>
                </div>
                <div>
                    <Form style={{marginTop:30}} className="form" >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
                            <Form.Text className="text-muted">
                               
    </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                           
                        </Form.Group>
                        <Button style={{float:'left', marginLeft:50, marginTop:30}} variant="primary" type="submit">
                            Submit
  </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
