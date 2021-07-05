import React , {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router-dom";

const About = () => {
    const history= useHistory();
    const callAboutPage = async()=>{
        try{
            const res= await fetch('/about',{
                method:"GET",
                headers:{
                    Accept:"appllication/json",
                    "Content-Type":"application/json"

                },
                credentials:"include"
            });
            const data=await res.json();
            console.log(data);
            if(!res.status === 200){
                const error=new Error(res.error);
                throw error;
            }
             

        }
        catch(err){
            console.log(err);
            history.push('/login');

        }
    }
    useEffect(() => {
       callAboutPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <>
              {/* <h1 className="mt-5">Hello my Secret Page </h1> */}

<div class="container emp-profile">
            <form method="GET">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                        name
                                    </h5>
                                    <h6>
                                    work
                                    </h6>
                                    <p class="proile-rating mt-3 mb-5" >RANKINGS : <span>1/10</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-md-4 order-1 order-md-0">
                        <div class="profile-work">
                            <p>WORK LINK</p>
                            <a href="https://www.youtube.com/thapatechnical" target="_thapa">Youtuber</a><br/>
                            <NavLink to="https://www.youtube.com/thapatechnical">Instagram</NavLink><br/>
                            <NavLink to="https://www.youtube.com/thapatechnical">Thapa Technical Website</NavLink>
                            <NavLink to="https://www.youtube.com/thapatechnical">GitHub</NavLink>
                            <p>SKILLS</p>
                            <NavLink to="https://www.youtube.com/thapatechnical">MERN Dev</NavLink><br/>
                            <NavLink to="https://www.youtube.com/thapatechnical">Web Developer</NavLink><br/>
                            <NavLink to="https://www.youtube.com/thapatechnical">Figma</NavLink><br/>
                            <NavLink to="https://www.youtube.com/thapatechnical">Software Engeeneer</NavLink><br/>
                        </div>
                    </div>
                    <div class="col-md-8 pl-5 about-info">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                               <label>User Id</label>
                                            </div>
                                            <div class="col-md-6">
                                            <p>id</p>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6 ">
                                                <p>name</p>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>email</p>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Phone</p>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>work</p>
                                            </div>
                                        </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        </>
    )
}

export default About
