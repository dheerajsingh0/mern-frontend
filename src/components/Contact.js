import React from 'react'

const Contact = () => {
    return (
        <>
           <div className="contact_info">
     <div className="container-fluid">
         <div className="row">
             <div className="col-lg-10 offset-lg-1">
                 <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">
                     <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                         <div className="contact_info_image">
                         <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="" /></div>
                         <div className="contact_info_content">
                             <div className="contact_info_title">Phone</div>
                             <div className="contact_info_text">+91 1111 543 2198</div>
                         </div>
                     </div> 
                     <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                         <div className="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" alt="" /></div>
                         <div className="contact_info_content">
                             <div className="contact_info_title">Email</div>
                             <div className="contact_info_text">contact@thapa.com</div>
                         </div>
                     </div> 
                     <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                         <div className="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" alt="" /></div>
                         <div className="contact_info_content">
                             <div className="contact_info_title">Address</div>
                             <div className="contact_info_text">Pune, MH, India</div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
</div>
<div className="contact_form">
     <div className="container">
         <div className="row">
             <div className="col-lg-10 offset-lg-1">
                 <div className="contact_form_container py-5">
                     <div className="contact_form_title">Get in Touch</div>
                     <form  id="contact_form">
                     <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between"> 
                         <input type="text" id="contact_form_name" className="contact_form_name input_field" 
                            name="name"placeholder="Your name" required="required"  />
                                <input type="text" id="contact_form_email" className="contact_form_email input_field" 
                            name="email"placeholder="Your email" required="required"  />
                         <input type="text" id="contact_form_phone" className="contact_form_phone input_field" 
                            name="phone"placeholder="Your phone number" /> 
                         </div>
                         <div className="contact_form_text">
                            <textarea className="text_field contact_form_message"  rows="4" placeholder="Message" required="required"
                                        name="message"></textarea> 
                        </div>
                        <div className="contact_form_button">
                            <button type="submit" className="button contact_submit_button" >Send Message</button>
                       </div>
                     </form>
                 </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Contact
