import style1 from "./Card.module.css";
import ItemData from "../data/itemData";
import Card from "./Card";
function Carditem() {
  return (
    <>
    <div className={style1.cardContainer}>
      {ItemData.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          loc={item.loc}
        />
      ))}
    </div>
     </> 
  );
}

export default Carditem;