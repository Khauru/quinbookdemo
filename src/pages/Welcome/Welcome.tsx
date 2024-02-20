import TypingEffect from "../../components/TypingEffect"
import style from "./Welcome.module.css"

export default function Welcome() {
    return (

    <section className={style.container} id="slider">
            <div className={style.containersmall}>
            <h1 className={style.h1big}><TypingEffect text="Quinbook – Das All-In-One Buchungs- &amp; Managementpaket" typingSpeed={50} /></h1>
            <h3 className={style.h3small}><TypingEffect text="Die führende Escape Room Lösung" typingSpeed={150} /></h3>
            </div>
    </section>
    )

}