import './Login.css';
import lg from './backspaceLogo.png';
import {MdMail}  from 'react-icons/md';
import {FaKey} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

function Login() {
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const getEmail = localStorage.getItem("emailData")
    const handleSubmit = () => {
        if(email.current.value == "admin@gmail.com" && password.current.value == "12345"){
            localStorage.setItem("emailData", "admin@gmail.com")
            localStorage.setItem("passwordData", "12345")
            navigate("/home")
        } else{
            alert("Email or Password is incorrect");
        }
    }
    return (
        <>
            <div className='form-head' >
                <form onSubmit={handleSubmit}>
                    <div className='logo-l'>
                        <img src={lg} className='img-l' alt="Brand Logo" />
                    </div>
                    <div className='input-body'>
                        <div class="container-l">
                            {/* <label style={{display:"block"}}>Email address</label>     */}
                            <MdMail className='login-icon'/>
                            <input type="email" className="form-container" placeholder='Enter mailID' ref={email}></input>   
                        </div>
                        <div class="container-l">
                            {/* <label style={{display:"block"}}>Password</label> */}
                            <FaKey className='login-icon'/>
                            <input type="password" className="form-container" placeholder='Enter password' ref={password} ></input>  
                        </div>

                        <button className='login-button' type="submit" >Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Login;