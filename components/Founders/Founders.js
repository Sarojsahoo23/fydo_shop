import stylet from '../Founders/Founders.module.css'
import img1 from '../../images/merchat.jpg'
import img2 from '../../images/customer1.png'
function Founders(){

    return(
        <>

        <div className={stylet.img1}>
          <img src={img1} />
        </div>
        <div className={stylet.img2}>
          <img src={img2} />
        </div>
        <div className={stylet.Founders}>
            <h1>Our Founders</h1>
            <div className={stylet.images}>
                <div>
                  <img src="https://pbs.twimg.com/profile_images/1517375456818831361/acM9Qz5H_400x400.jpg"/>
                  <div className={stylet.dec}>
                  <h3>Satyajeet Patnayak</h3>
                  <p>CEO </p>
                  </div>
                 
                </div>
                <div>                  
                  <img src="https://media.licdn.com/dms/image/C4D03AQFE5kO3_fGKrg/profile-displayphoto-shrink_800_800/0/1573069623997?e=2147483647&v=beta&t=DevGXfjbDwGWyT2FMOUviC5INpfkkFVbpqV7TZGZgaE"/>
                  <div className={stylet.dec}>
                  <h3>Daramchand patnayak</h3>
                  <p>Co-founder </p>
                  </div>
                 
                </div>
                <div>
                 <img src="https://pbs.twimg.com/profile_images/1481114825292140546/TmdKaxV-_400x400.jpg"/>
                 <div className={stylet.dec}>
                   <h3>Sinchan kumar mishra</h3>
                   <p>CTO </p>
                 </div>
                
               </div>
            </div>
        </div>
       
     </>
    )
}
export default Founders;