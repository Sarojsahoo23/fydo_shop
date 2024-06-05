import React from "react"
import { NavLink } from "react-router-dom";
import styele from './Page.module.css'
import img from '../../images/contactresize.png';
import img2 from '../../images/helpcenter image.avif'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img1 from '../../images/support.jpeg'
import ContactFrom from '../Contact side/ContactFrom'

const  Contact =()=> {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState(" ");
    const [feedback,setfeedback] =useState("");
    const [rating,setrating] =useState("");
      const navigate =useNavigate();
      
      const handlerating = async(e)=>{
        e.preventDefault();
       
        try{
            const {data} =await axios.post(
                "http://localhost:4000/api/vi1/reservation/rate",
            
                {feedback,rating},
                
                
                {
                    headers:{
                        "Content-Type" :"application/json"
                    },
                    withCredentials:true
                }
            );
            toast.success(data.message);
            setfeedback(" ");
            setrating(" ");
        }catch(error){
            toast.error(error.response.data.message);
        }
      };
      const handleContact = async(e)=>{
        e.preventDefault();
        const newDate = formatDate(date);
       
        try{
            const {data} =await axios.post(
                "http://localhost:4000/api/vi1/reservation/send",
            
                {firstName,lastName,email,phone,date:newDate,time},
                {
                    headers:{
                        "Content-Type" :"application/json"
                    },
                    withCredentials:true
                }
            );
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setPhone(" ");
            setEmail("");
            setTime("");
            setDate(" ")
            navigate("/");
        }catch(error){
            toast.error(error.response.data.message);
        }
      };
      
     
      
      function formatDate(inputDate) {
        const parts = inputDate.split('-');
        const formattedDate = parts[2] + '-' + parts[1] + '-' + parts[0]; 
        return formattedDate;
    }
    const getStarColor = (index) => {
        return rating >= index ? 'yellow' : 'gray';
      };
     

     return ( 
        <>
                 
 <div className={styele.container}>
<img src={img} alt="network issues"/>
</div>
<section className={styele.reservation} id={styele.reservation}>
<div className={styele.container}>
<div className={styele.banner}>
   <div className={styele.helptext}>
      <h5>Help Center</h5>
     <p>Are you ready to take your company to the next level using location based solution? Give us a call. We’d be delighted to hear from you and respond to your queries.</p>
   </div>
     
</div>
<div className={styele.hepimg}>
      <img src={img2} alt="network issues" />
</div>
</div>
</section>
<section className={styele.reservation} id={styele.reservation}>
<div className={styele.container}>
<div className={styele.bannerbox}>
<div className={styele.reservation_form_box}>
<div className={styele.contactbox}>
  <h1>Contact our advisor</h1>
  <p>Pranab Aluk</p>
  <i class="fa-solid fa-square-phone"></i>
  <a class="px-2 text-sm" href="tel:+91 7849045864">+91 7849045864</a>
  <i class="fa-brands fa-whatsapp"></i>
  <a class="px-2 text-sm" target="_blank" href="https://wa.me/+91 7849045864">+91 7656098671</a>
  <p>Saroj Kumar Sahoo</p>
  <i class="fa-solid fa-square-phone"></i>
  <a class="px-2 text-sm" href="tel:+91 8908042477">+91 8908042477</a>
 
</div>
</div>
</div>
<div className={styele.bannerbox}>
<div className={styele.reservation_form_box}>
   <div className={styele.contactbox}>
      <h1>Get in touch</h1>
      <i class="fa-solid fa-location-dot"></i>
     <a href="https://maps.app.goo.gl/2YBfhiJPSgh94vBW7">Fydo - Best Deals & Offers Nearby
     Innovation Corridor, OUTR University, Ghatikia, Bhubaneswar, Odisha 751003</a>
     <p>
     <i class="fa-solid fa-square-phone"></i>
      <a href="tel:+91 8447734227">+91 8447734227</a>  
      <i class="fa-solid fa-envelope"></i> 
      <a href="mailto:support@fydo.in">support@fydo.in</a>  
     </p>      
    </div>
   
</div>
</div>
</div>
</section>
        <section className={styele.reservation} id={styele.reservation}>
        <div className={styele.container}>
            <div className={styele.banner}>
                <img src={img1} alt="network error" />
            </div>
            <div className={styele.banner}>
                <div className={styele.reservation_form_box}>
                    <h1>Contact Us</h1>
                    <p>For Further Question ,please Call</p>
                    <form>
                        <div>
                            <input  type="text" placeholder="First Name"
                            value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <input type="text" placeholder="Last Name"
                            value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div>
                            <input type="date" placeholder="Date" value={date} onChange={(e)=>setDate(e.target.value)} />
                            <input type="time" placeholder="time" value={time} onChange={(e)=>setTime(e.target.value)} />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" className="email_tag" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <input  type="number" placeholder="Phone"   value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                        <button type="submit" onClick={handleContact}> <h6>
                                     Enquiry Now
                            </h6> {" "} <span><HiOutlineArrowNarrowRight/> </span>
                         </button>
                            
                    </form>
                </div>
            </div>
        </div>
     </section> 
     <div>
        <h1>Share your experience with us</h1>
       <div className={styele.starbox}>
           <div className={styele.star}>
               {[...Array(5)].map((_,index)=>{
                return <span key={index}
                style={{ color: getStarColor(index + 1), cursor: 'pointer' }}
                onClick={()=>{
                
                    setrating(index+1);
                }}
                   value={rating} onChange={(e)=>setrating(e.target.value)}

                >&#9733;</span>
               })}

            </div>    
       </div>
       <div className={styele.feedbackform}>
            <form >
               <textarea  rows="6" cols="80"  value={feedback} onChange={(e)=>setfeedback(e.target.value)} placeholder="Please leave us your feedback."></textarea>
            </form>
            <button type="submit" onClick={handlerating} > Submit feedback</button>
        </div>
       </div>
      <NavLink to="/">
            <div className={styele.feedbackform}>
             
                <button className={styele.underline} >Back</button>
               
           
            </div>
        </NavLink>
      <ContactFrom/>
     </>
    )



    
}
export default Contact;


