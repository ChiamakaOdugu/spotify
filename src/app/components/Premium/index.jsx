import { premium  } from "./data";
import style from './Premium.module.css'
 
export const Premium = (props) => {
    return (
        <section className={`${style.premium} ${props.className}`}>
            <h2 className={style.title}>Pick your Premium</h2>
            <p>Listen without limits on your phone,
             speaker, and other devices.
            </p>
            <div>
               {premium.map((premium) => (
                <div className={style.item}>
                 <img src={premium.image} />
                </div>
              ))}
            </div>
        </section>
    )
}

export const PremiumPlan = () => {
    return (
        <div>
            <div>
                <button>One-time plans available</button>
                <h3>Mini</h3>
                <p>From ₹7/day</p>
                <p>1 account on mobile only</p>
            </div>
            <hr/>
            <div>
                <h4>Ad-free music listening on mobile</h4>
                <h4>Group Session</h4>
                <h4>Download 30 songs on 1 mobile device</h4>
            </div>
            <button>View Plans</button>
            <p>Terms and conditions apply.</p>
        </div>
    )
}