import React,{useState} from 'react';
import loginpic from '../images/login.svg';
import {NavLink  ,useHistory} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    // mycode
    const history=useHistory();
    /*const [user, setUser] = useState({
        email:"",password:""
    });
    let name,value;
    const handleInputs = (e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }
    const postdata=async(e)=>{
        e.preventDefault();
        const {email,password}=user;
        if(!email || !password){
            toast.error("❌ Reactjs side Filled the input filled ❌");
        }
        else{
            let res=await fetch("/signin",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,password
                })
            });
            const data=await res.json();
            let sererror=data.error;
            if(res.status===400 ||!data){
                if(sererror===""){
                    toast.error("❌ not detected  Invalid Crediental ❌");
                }
                else{
                          toast.error("❌ "+data.error+ " ❌");
                   // console.log(data);
                  }
            }
            else if (res.status===201){
                console.log(" Registration sucessfull");
                toast.success("Congrats you have sucessfully Registered");
                history.push("/"); 
            }
            else{
                toast.error("❌ Unexpected error occurs contact to admin ❌");
            }
        }
    }*/
// with less code
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const loginUser =async(e)=>{
    e.preventDefault();
    if(!email || !password){
        toast.error("❌ Reactjs side Filled the input filled ❌");
    }else{
        const res=await fetch('/signin',{
            method:"POST",
            headers:{
                "content-type":"application/JSON"
            },
            body:JSON.stringify({
                email,password
            })
        })
        const data=res.json();
        
        if(res.status===400 || !data){
            toast.error("❌ "+data.error+ " ❌");
        }else{
            //sucessfull
            console.log(" Registration sucessfull");
            toast.success("Congrats you have sucessfully Registered");
            history.push("/"); 
        }
    }

}

    return (
        <>
            <section className="sign-in">
            <div className="container mt-5">
                <div className="signin-content">
                <div className="signin-image">
                            <figure>
                                <img src={loginpic} alt="signin pic" />
                            </figure>
                            <NavLink to="/signup" className="signup-image-link"> Create an Account</NavLink>
                        </div>
                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                        <form method="POST" className="register-form">
                            
                            <div className="form-group">
                                <label htmlFor="email">
                                <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <input type="email" name="email" id="email" autoComplete="off" 

                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off" 
    
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                placeholder="Your Password"/>
                            </div>                   
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"
                                onClick={loginUser}
                                />
                            </div>
                        </form>
                        </div>
                </div>
            </div>      
            </section>
            <ToastContainer
                position="top-right"
                autoClose={4500}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                limit={3}/>
        </>
    )
}

export default Login
