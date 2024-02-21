
import { Dispatch,SetStateAction, useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../Signupform/SignupForm";
//import DropMenu from "../../components/Menu";
import "./Navigationbar2.css"



interface Props {
    showLogin: boolean,      
    setShowLogin: Dispatch<SetStateAction<boolean>>,
    showSignup: boolean,      
    setshowSignup: Dispatch<SetStateAction<boolean>>;
  }
  
const Navigationbar2: React.FC<Props> = ({ showLogin,setShowLogin, showSignup, setshowSignup}) =>  {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header>
            <div className="container">
                <h1 className="logo" />
                <div id="logo">
                    <a
                        href="/"
                        className="logo"
                        data-dark-logo="../Quinbook-Logo-05.png"
                        >
                        <img src="../Quinbook-Logo-05.png" alt="Quinbook" 
                        style={{ width: 'auto', height: '70px' }}/>
                    </a>
                </div>
                <nav>
                    <ul>
                    <li>
                        <button 
                            onClick={()=>{
                                const section = document.getElementById("aboutscroll");
                                (section != null) && section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}> ÜBER QUINBOOK </button> 
                        </li>

                        <li>
                        <button 
                            onClick={()=>{
                                const section = document.getElementById("reviews");
                                (section != null) && section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}> REZENSIONEN </button> 
                        </li>
                        <li>
                            <button onClick={() => setShowDropdown(!showDropdown)}>
                                Mehr
                            </button>

                            <div className="dropdown-menu" style={{ display: showDropdown ? 'block' : 'none'}}>
                                <button>Preise</button>
                                <button>Zahlungsarten</button>
                                <button>Kunden</button>
                            </div>
                        </li>
                        <li>
                        <button 
                            onClick={() => setshowSignup(true)}>REGISTRIEREN</button>
                            {showSignup && <SignupForm onClose={() => setshowSignup(false)} />}
                        </li>
                        <li>
                            
                        <button  
                            onClick={() => setShowLogin(true)}>EINLOGGEN</button>
                            {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}

export default Navigationbar2
