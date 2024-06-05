import styles from '../Features/Features.module.css'
import img from '../../images/unnamed.webp'
import img1 from '../../images/redfydo.webp'
import img2 from '../../images/eventfeature.png'


function Features(){
    return(
        <>
        <h1 style={{color: "rgb(233, 9, 9)"}} >Features</h1>
         
        <div className={styles.container}>

           <div className={styles.about}>
              <div className={styles.row}>
                    <div className={styles.aboutcol1}>
                         <img src={img} />
                     </div>
                     <div className={styles.aboutcol2}>   
                          <div className={styles.one}>
                                <p >Fydo is a platform to get information on the Best Deals & Discounts. We have a huge customer base of people/shoppers/students who are looking for the best offers/discounts when they want to shop nearby.In simple words, we influence our customers to visit your shop by payingthem huge rewards in the form of cashback.Every time our customer visits your shop, he gets cashback on every transaction made through us and further uses this wallet balance at your shop in his next purchase.Fydo enables you to get 60% more revenue, 25x new customers and boost your brand visibility by providing insights to improve your business. The main goal of a businessman is to have a good customer base in a shop and Fydo exactly helps you in that by increasing customer footfall in your shop.
                               </p>
                           </div>  
                   
                        </div>
                </div>     
            </div> 

            <div className={styles.about}>
              <div className={styles.row}>
             
                    <div className={styles.aboutcol1}>
                
                         <img src={img1} />
                     </div>
                     <div className={styles.aboutcol2}>   
                          <div className={styles.one}>
                                <p >Lack of a digital platform to access information on upcoming sale, Deals & Discounts from brands & malls in a city .Lack of a platform that gives information about various activities & events happening in one’s city.Our platform provides information about all types of deals, discounts,offers, ongoing and upcoming sale from all shops and malls in a city. With Fydo, People can get information about all the events that are happening in their city
                               </p>
                           </div>  
                   
                        </div>
                </div>     
            </div> 
            <div className={styles.about}>
              <div className={styles.row}>
                    <div className={styles.aboutcol1}>
                         <img src={img2} />
                     </div>
                     <div className={styles.aboutcol2}>   
                          <div className={styles.one}>
                                <p >What sets Greet apart from other Event Organizers is our commitment to your success. With Greet, you'll have a dedicated relationship manager by your side, ensuring every aspect of your event is meticulously handled. From pre- event preparations to on-site management, our dedicated manager brings unparalleled dedication to make your event an undeniable success. I wanted to make Greet stand out frorn other event organising platforms and happy to have build this awesome product.
                               </p>
                           </div>  
                   
                        </div>
                </div>     
            </div> 


   
    
        </div> 
        </>
    )
}
export default Features;

