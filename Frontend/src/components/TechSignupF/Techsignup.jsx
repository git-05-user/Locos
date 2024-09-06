import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginimg from "../../assets/heroimg2.png";
import "./Techsignup.css";
import axios from 'axios';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Techsignup = () => {
  const [user,setUser] = useState([]);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmpassword,setConfirmPassword] = useState('');
  const [phoneno,setPhoneno] = useState('');
  const [services,setServices] = useState("electrical");
  const [address,setAddress] = useState('');
  const [pincode,setPincode] = useState('');
  const navigate = useNavigate();

  //to display all acconts in DB 
  useEffect(() => { 
    fetchUsers(); 
  }, []) 
 
  //axios connection  
  const fetchUsers = () => { 
    axios 
      .get('http://localhost:8088/authorize/servicerregister') 
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
      .post('http://localhost:8088/authorize/servicerregister', { email, password, phoneno,services,address, pincode }) 
      .then(() => { 
        setEmail('') 
        setPassword('') 
        //setConfirmPassword('') 
        setPhoneno('')
        setServices('')
        setAddress('') 
        setPincode('') 
        alert('Registraion is successful') 
        fetchUsers() 
        navigate('/techlogin') 
      }) 
      .catch((error) => { 
        console.log('Unable to register user') 
      }) 
  }
  return (
    <>
      <body className="Partnersignuppagebody">
        <div className="partner-main-container">
          <form onSubmit={handleRegister} className="partnersignupform">
            <h1>Create an Account</h1>
            <label htmlFor="">Email Address</label>
            <br />
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required />
            <br />
            <label htmlFor="">Confirm Password</label>
            <br />
            <input type="password" value={confirmpassword} onChange={(e)=> setConfirmPassword(e.target.value)} required />
            <br />
            <label htmlFor="">Phone No</label>
            <br />
            <input type="text" value={phoneno} onChange={(e)=> setPhoneno(e.target.value)} required />
            <br />
            <label htmlFor="">Services You Offer</label>
            <br />
            <select id="services-drop" name="services" value={services} onChange={(e)=> setServices(e.target.value)} required>
              <option value="electrical">Electrical</option>
              <option value="plumbing">Plumbing</option>
              <option value="installation">Installation</option>
              <option value="maintenance">Maintenance</option>
              <option value="television">Television</option>
              <option value="system">System</option>
              <option value="ac">AC</option>
              <option value="ro">RO</option>
              <option value="washing-machine">Washing Machine</option>
              <option value="refrigerator">Refrigerator</option>
              <option value="microwave-oven">Microwave Oven</option>
              <option value="cleaning">Cleaning</option>
            </select><br />
            <label htmlFor="">Address</label>
            <br />
            <textarea id="addresstextarea" rows="2" cols="40" value={address} onChange={(e)=> setAddress(e.target.value)} required></textarea>
            <br />
            <label htmlFor="">Pincode</label>
            <br />
            <input type="text" value={pincode} onChange={(e)=> setPincode(e.target.value)} required/>
            <br />
            <br />
              <button type="submit">Sign Up</button>
            <br />
            <p>
              Already have an account?{" "}
              <Link to="/techlogin">
                <span>Login</span>
              </Link>
            </p>
          </form>
          <div className="img-container">
            <h1>Grow With Us a Partner</h1>
            <img src={loginimg} alt="" />
          </div>
        </div>
      </body>
    </>
  );
};
