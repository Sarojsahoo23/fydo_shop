import Carditem from "../card/Carditem";
import style from "../card/Card.module.css";
import Founders from "../Founders/Founders";
import Services from "../Services/Services";
import Features from "../Features/Features";
import ContactFrom from "../Contact side/ContactFrom";
import Event from "../Events/Event";


function Home() {
  return (
    <>
      <Services />  
      <h1 style={{color: "rgb(233, 9, 9)"}}>Photo Gallery </h1>
      <div className={style.cardContainer}>
      <Carditem />
      </div>
      <Features />
      <Founders />
      <Event/>
     <ContactFrom/>
     
    </>
    
    
  );
}
export default Home;
