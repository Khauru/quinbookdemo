import "./Reviews.css"
import {Link} from "react-router-dom"

export default function Reviews() {
    return (
        <div id="reviews" className="container" style={{marginTop:"25%",height:"90rem"}}>
        <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
            <h4 className="font-cond-l fg-accent lts-md mgb-10" >
            Not Yet Convinced?
            </h4>
            <h1
            className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg"
            
            >
            Read Customer Reviews
            </h1>
        </div>
        <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
            <li>
            <img
                src="https://cdn.quinbook.com/pictures/o/1_021a6d0e7fae44f05715fe11a0f896d0.jpg"
                className="wpx-100 img-round mgb-20"
                title=""
                alt=""
                data-edit="false"
                data-editor="field"
                data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
                style={{
                    width: "100px",
                    height: "100px"
                }}
            />
            <p className="fs-110 font-cond-l" >
                "Die Elude Escape Rooms sind seit 2017 geöffnet, und wir haben ein Buchungssystem verwendet, 
                das ursprünglich für Haunted Houses konzipiert war und für die Nutzung von Escape Rooms angepasst wurde. 
                (Klicker hier für den ganzen Bericht). "
            </p>
            <Link to={`/post/${1}`}>Read More</Link>

            <h5 className="font-cond mgb-5 fg-text-d fs-130" >
            David Middleton
            </h5>
            <small
                className="font-cond case-u lts-sm fs-80 fg-text-l"
                
            >
                

                Bewilder Box Brighton (England)

            </small>
            </li>
            <li>
            <img
                src="https://cdn.quinbook.com/pictures/o/1_c02fb82e9d9e09fab8bc70a65998ad39.jpg"
                className="wpx-100 img-round mgb-20"
                title=""
                alt=""
                data-edit="false"
                data-editor="field"
                data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
                style={{
                    width: "100px",
                    height: "100px"
                }}
            />
            <p className="fs-110 font-cond-l" >
                " Bewilder Box wurde 2016 eröffnet, und eine unserer ersten Aufgaben war es, eine Buchungssoftware zu finden. 
                (Klicker hier für den ganzen Bericht). "
            </p>
            <Link to={`/post/${2}`}>Read More</Link>
            <h5 className="font-cond mgb-5 fg-text-d fs-130" >
                Julia
            </h5>
            <small
                className="font-cond case-u lts-sm fs-80 fg-text-l"
                
            >
                
                Elude Escape Rooms Sydney (Australien)
            </small>
            </li>
            <li>
            <img
                src="https://cdn.quinbook.com/pictures/o/1_bc0075185bf7ade32367496e92ed76e3.jpg"
                className="wpx-100 img-round mgb-20"
                title=""
                alt=""
                data-edit="false"
                data-editor="field"
                data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
                style={{
                    width: "100px",
                    height: "100px"
                }}
            />
            <p className="fs-110 font-cond-l" >
                "QuinBook hat viele Features, die wir lieben und nutzen. In diesem Erfahrungsbericht gehe ich auf die Features ein,
                 die für uns den größten Mehrwert darstellen. (Klicker hier für den ganzen Bericht). "
            </p>
            <Link to={`/post/${3}`}>Read More</Link>
            <h5 className="font-cond mgb-5 fg-text-d fs-130" >
                Sylvia Coman
            </h5>
            <small
                className="font-cond case-u lts-sm fs-80 fg-text-l"
                
            >
                Mysteria Escape Bückeburg (Deutschland)
            </small>
            </li>
        </ul>
        </div>
    );

}


