import styley from '../Contact side/Contact.module.css';
import img from '../../images/img1.png';
import img2 from '../../images/eventpng.png';

function ContactFrom() {
    return (
        <>
            <div className={styley.raw}>
                <div className={styley.leftside}>
                    <div className={styley.responsivemap}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.5591460281744!2d85.77514947459716!3d20.27711038119076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7daa1beaf59%3A0x15db19ca3f5ceeb6!2sFydo%20-%20Best%20Deals%20%26%20Offers%20Nearby!5e0!3m2!1sen!2sin!4v1714633436575!5m2!1sen!2sin" 
                            width="600" 
                            height="400"  
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <div className={styley.rightside}>
                    <div className={styley.boxes}>
                        <img src={img} alt="Fydo" />
                        <address>Address: Innovation Corridor, OUTR University, Ghatikia, Bhubaneswar, Odisha 751003</address>
                    </div>
                    <div className={styley.socialicons}>
                        <p><i className="fa-solid fa-globe"></i> <a href='https://fydo.in/'>Fydo.in</a></p>  
                        <p><i className="fa-solid fa-calendar-days"></i><a href='https://event.fydo.in/'>Greet.fydo.in</a></p>
                        <p><i className="fa-solid fa-square-phone"></i><a href='tel:+91 8447734227'>+91 8447734227</a></p>
                        <p><i className="fa-solid fa-envelope"></i><a href='mailto:support@fydo.in'>support@fydo.in</a></p>
                        <h5>Follow Us</h5>
                        <div className={styley.followicon}>
                            <a href="https://m.facebook.com/122554532476946/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/fydoin?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/fydoin" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://twitter.com/fydoin" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
                        </div>
                        <div className={styley.policy}>
                            <p><a href='https://fydo.in/terms-and-conditions.html' target='_blank' rel="noopener noreferrer">Terms & Conditions</a></p>
                            <p><a href='https://fydo.in/privacy-policy.html' target='_blank' rel="noopener noreferrer">Privacy Policy</a></p>
                            <p><a href='https://fydo.in/refund-policy.html' target='_blank' rel="noopener noreferrer">Refund Policy</a></p>
                        </div>
                    </div>
                </div>
                <h3>Copyright © 2024 Made with ♥ by Fydo</h3>
            </div>
        </>
    );
}

export default ContactFrom;
