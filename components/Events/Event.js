import stylef from '../Events/Event.module.css'
import img from '../../images/eventpng.png'
function Event(){
     return (
        <>
           <section className={stylef.reservation} id={stylef.reservation}>
                   
                          <div className={stylef.helpimg}>
                              <img src={img} alt="network issues" />
                           </div>
                <div className={stylef.container}>
                    <div className={stylef.banner}>
                        <div className={stylef.helptext}>
                          <p>Hey, Are You</p>
                          <h2>Ready For The Events?</h2>
                          <p>Event Made Easy</p>
                          <p>Event booking / management platfrom</p>
                          <button type='submit' ><a href='https://event.fydo.in/' target='_'>Go To Event Site</a></button>
                        </div>
                          
                    </div>
                   
                </div>
             </section>

        </>
     )
}
export default Event;