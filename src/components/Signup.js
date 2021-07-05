import React,{useState} from 'react';
import signpic from "../images/signup.svg";
import {NavLink ,useHistory} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const history=useHistory();
    const [user, setUser] = useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    });
    let name,value;
    
    const handleInputs = (e)=>{
      //  console.log(e);
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});


    }
    const postdata =async(e)=>{
        e.preventDefault();
        
        const { name,email,phone,work,password,cpassword }=user;
        if(!name || !email || !phone || !work || !password || !cpassword){
            toast.error("❌ Reactjs side Filled the input filled ❌");
        }
        else{

        
        const res= await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"               
            },
            body:JSON.stringify({
                name,email,phone,work,password,cpassword

            })

        });
        const data=await res.json();
        let sererror=data.error;
        if(res.status=== 422 || !data){
            if(sererror ===""){
                toast.error("❌ not detected  Invalid Crediental ❌");
            }
          else{

          
            toast.error("❌ "+data.error+ " ❌");
           // console.log(data);
          }
           
        }
        else{
            
            console.log(" Registration sucessfull");
            history.push("/login");
            toast.success("Congrats you have sucessfully Registered");
        }
    }

    }
    return (
        <>
           <section className="signup">
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form">
                            <div className="form-group">
                                <label htmlFor="name">
                                <i className="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <input type="text" name="name" id="name" autoComplete="off"
                                value={user.name}
                                onChange={handleInputs}
                                placeholder="Your name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <input type="email" name="email" id="email" autoComplete="off"
                                value={user.email}
                                onChange={handleInputs}
                                placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">
                                <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                </label>
                                <input type="number" name="phone" id="phone" autoComplete="off"
                                value={user.phone}
                                onChange={handleInputs}
                                placeholder="Your Phone"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="work">
                                <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                </label>
                                <input type="text" name="work" id="work" autoComplete="off"
                                value={user.work}
                                onChange={handleInputs}
                                placeholder="your profession"/>
                            </div> 
                            <div className="form-group">
                                <label htmlFor="password">
                                <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off"
                                value={user.password}
                                onChange={handleInputs}
                                placeholder="Your Password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpassword">
                                <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                value={user.cpassword}
                                onChange={handleInputs}
                                placeholder="confirm your password"/>
                            </div> 
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register"
                                onClick={postdata}/>
                                
                            </div>
                        </form>
                        </div>
                        <div className="signup-image">
                            <figure>
                                <img src={signpic} alt="signup pic" />
                            </figure>
                            <NavLink to="/login" className="signup-image-link"> I am already register</NavLink>
                        </div>
                    
                </div>
                
            </div>      
            </section>
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={true}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
limit={3}
/>
        </>
    )
}

export default Signup
