import React ,{useState}from "react";
import { Link } from "react-router-dom";
import loginimg from "../../assets/loginpageimg.png";
import "./Usersignup.css";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Usersignup = () => {

  const [user, setUser] = useState([]) 
  const [username,setUserName] = useState('')
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 
  const [confirmpassword, setConfirmPassword] = useState('') 
  const [address, setAddress] = useState('') 
  const [pincode, setPincode] = useState('') 
  const navigate = useNavigate() 
 
  //to display all acconts in DB 
  useEffect(() => { 
    fetchUsers(); 
  }, []) 
 
  //axios connection  
  const fetchUsers = () => { 
    axios 
      .get('http://localhost:8088/authorize/userregister') 
      .then((res) => { 
        console.log(res.data) 
      }) 
      .catch((error)=>{ 
        console.log('error',error) 
      }); 
  } 
   
  //post records on DB 
  const handleRegister = (event) => { 
    event.preventDefault() 
 
    if (password !== confirmpassword) { 
      alert("Passwords doesn't match!"); 
      return; 
    } 
 
    axios 
      .post('http://localhost:8088/authorize/userregister', { username,email, password, address, pincode }) 
      .then(() => { 
        setUserName('')
        setEmail('') 
        setPassword('') 
        //setConfirmPassword('') 
        setAddress('') 
        setPincode('') 
        fetchUsers() 
        alert('Registraion is successful') 
        navigate('/userlogin') 
      }) 
      .catch((error) => { 
        if(error.response && error.response.status === 404 ){
          alert(error.response.data.message);
        }else{
        console.log('Unable to register user');
        alert('An error occurred while registering');
        }
      }) 
  }
  
  return (
    <>
    <body className="Signuppagebody">
          <div className="main-container">
          <form onSubmit={handleRegister} className="signupform">
            <h1>Create an Account</h1>
            <label htmlFor="">UserName</label>
            <br />
            <input type="text" value={username} onChange={(e)=> setUserName(e.target.value)} required/> {/* Modified */}
            <br />
            <label htmlFor="">Email Address</label>
            <br />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <br />
            <label htmlFor="">Confirm Password</label>
            <br />
            <input type="password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
            <br />
            <label htmlFor="">Address</label>
            <br />
            <textarea  id="addresstextarea" rows="2" cols="40" value={address} onChange={(e)=> setAddress(e.target.value)} required></textarea>
            <br />
            <label htmlFor="">Pincode</label>
            <br />
            <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} required/>
            <br />
            <br />
            <button type="submit">Sign Up</button>
            <br />
            <p>
              Already have an account?{" "}
              <Link to="/userlogin">
                <span>Login</span>
              </Link>
            </p>
          </form>
          <div className="img-container">
            <img src={loginimg} alt="" />
          </div>
        </div>
        </body>
    </>
  );
};
