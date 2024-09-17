import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import loginimg from "../../assets/heroimg2.png";
import "./Techlogin.css";
import axios from "axios";
import { useEffect } from "react";

export const Techlogin = () => {

  const [user,setUser] = useState([]);  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const [showPopup,setShowPopup] = useState(false);
  const [forgotEmail,setForgotEmail] = useState('');
  
  useEffect( () => { 
    fetchUsers(); 
  },[]) 
 
  const fetchUsers = () =>{ 
    axios 
    .get('http://localhost:8088/techauthorize/servicerregister') 
    .then((res)=>{ 
      console.log(res.data) 
    }) 
  } 
 
  const handleLogin = async (event) => { 
    event.preventDefault(); 
    try{ 
    const response = await axios.post('http://localhost:8088/techauthorize/servicerlogin',{email,password}) 
    const token = response.data.token 
    alert('Login successful') 
    setEmail('') 
    setPassword('') 
    fetchUsers(); 
    navigate('/techdashboard');
    window.location.reload();
    localStorage.setItem('token',token);
    } 
    catch(error){ 
      alert('login error') 
    } 
  }
  const handleForgotPasswordClick = ()=>{
    setShowPopup(true);
  }

  const handleForgotPasswordSubmit = ()=> {
    axios
    .post('http://localhost:8088/techauthorize/servicerForgotPassword/',{email:forgotEmail})
    .then( (res)=>{
      console.log('requested sent',res)
      alert('Email is Correct. Please Check your Email');
      setShowPopup(false);
    })
    .catch((error)=>{
      alert('The email address you entered is not correct');
      console.log('forgot password error',error);
    })
  };

  return (
    <>
    <body className="loginpagebody">
          <div className="main-container">
          <form onSubmit={handleLogin} className="loginform">
            <h1>Welcome Back</h1>
            <label htmlFor="">Email Address</label>
            <br />
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required />
            <br />
            <p onClick={handleForgotPasswordClick}>
              Lost Password? 
            </p>
            <br />
            <button type="submit">Login</button>
            <br />
            <p>
              Don't have an account?{" "}
              <Link to="/techsignup">
                <span>Signup</span>
              </Link>
            </p>
          </form>
          <div className="img-container">
            <img src={loginimg} alt="" />
          </div>
        </div>
        </body>
        {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>Forgot Password</h3>
            <input
              type="email"
              placeholder="Enter your email"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              required
            />
            <button onClick={handleForgotPasswordSubmit}>Submit</button>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};
