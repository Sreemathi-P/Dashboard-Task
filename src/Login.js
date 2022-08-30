import './Login.css';
import lg from './backspaceLogo.png';
import {MdMail}  from 'react-icons/md';
import {FaKey} from 'react-icons/fa';
function Login() {
    return (
        <>
            <div className='form-head' >
                <form>
                    <div className='logo-l'>
                        <img src={lg} className='img-l' alt="Brand Logo" />
                    </div>
                    <div className='input-body'>
                        <div class="container">
                            {/* <label style={{display:"block"}}>Email address</label>     */}
                            <MdMail className='login-icon'/>
                            <input type="email" className="form-container" placeholder='Enter mailID'></input>   
                        </div>
                        <div class="container">
                            {/* <label style={{display:"block"}}>Password</label> */}
                            <FaKey className='login-icon'/>
                            <input type="password" className="form-container" placeholder='Enter password' ></input>  
                        </div>

                        <button type="submit" >Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Login;