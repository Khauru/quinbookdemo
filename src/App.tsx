
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Blog from './pages/Blog/Blog'
import Navigationbar2 from './pages/Navigationbar/Navigationbar2';
import LoginForm from './pages/LoginForm/LoginForm';
import SignupForm from './pages/Signupform/SignupForm';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {MantineProvider} from "@mantine/core";

import './oldCSS/theme-base.css'
import './oldCSS/theme-elements.css'
import './oldCSS/responsive.css'
import './oldCSS/blue.css'
import './oldCSS/bootstrap.min.css'
import './oldCSS/flag-icon.min.css'
import './oldCSS/custom.css'
import './styles/LoginForm.css'
import './oldCSS/font-awesome.min.css'



const posts = [
  { id: '1', 
  title: 'Erfahrungsbericht Bewilder Box', 
  content: `Bewilder Box wurde 2016 eröffnet, und eine unserer ersten Aufgaben war es, eine Buchungssoftware zu finden. Nach einigen Online-Recherchen entschieden wir uns für ein System, das zu dieser Zeit in der britischen Industrie recht häufig verwendet wurde. In unseren Augen sah es gut aus, schien alles zu bieten, was wir brauchten, und kostete nicht viel.

  Wir hatten hier und da ein paar Probleme. Es war frustrierend, dass wir unsere E-Mails nicht individuell anpassen konnten, ebenso wie die eher schleppende Reaktion auf viele unserer Unterstützungsbedürfnisse, aber wir haben weiter gearbeitet und all die wunderbaren versprochenen Funktionen erwartet, die auf der Roadmap standen.

  Mit der Zeit erschienen die neuen Funktionen nicht mehr. Mit dem Wachstum unseres Unternehmens wuchs auch unsere Frustration über die Software, da wir erkannten, dass sie viele der Dinge, die wir zur Unterstützung unserer größeren Struktur benötigten, nicht bieten würde. Wir begannen, neue Software zu beschaffen, um die Lücken zu füllen, was wiederum die Kosten erhöhte, nicht nur für die Software selbst, sondern auch für die Arbeitskräfte, die für den Datentransfer zwischen den Systemen benötigt wurden. Dadurch erhöhte sich auch die Wahrscheinlichkeit menschlichen Versagens, und menschliches Versagen kostete uns in der Regel am Ende Geld in erstatteten Spielen.

  Ein zufälliges Treffen mit dem Quinbook-Team auf der ERIC-Konferenz der britischen Escape Room Industrie im Jahr 2018 machte uns klar, dass es eine weitaus bessere Option gibt. Eine Option, die viele europäische Branchenführer bereits angenommen hatten. Innerhalb von 6 Monaten hatten wir den Wechsel vollzogen, und wir haben nie zurückgeschaut.

  Der größte Reiz für Bewilder Box war vierfach:`, 
  date: '28.02.2020 14:41:45 Uhr' },
  { id: '2', 
  title: 'Erfahrungsbericht Bewilder Box2', 
  content: 'This is the first post content...', 
  date: '28.02.2020 14:41:45 Uhr' },
  { id: '3', 
  title: 'Erfahrungsbericht Bewilder Box3', 
  content: 'This is the first post content...', 
  date: '28.02.2020 14:41:45 Uhr' }
];

function App() {

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  return (
    <MantineProvider>
      <Navigationbar2
        showLogin={showLogin} 
        setShowLogin={setShowLogin}
        showSignup={showSignup} 
        setshowSignup={setShowSignup}
        />
      
    <Routes>
      <Route path="/post/:postId" element={<Blog posts={posts} />} />
      <Route path="/funktionen" element={<Home scrollTo="funktionen" />} />
      <Route path="/reviews" element={<Home scrollTo="reviews" />} />
      <Route path="/about" element={<Home scrollTo="aboutscroll" />} />
      <Route path="/signup" element={<SignupForm onClose={() => navigate("/")}/>} />
      <Route path="/login" element={<LoginForm onClose={() => navigate("/")}/>} />
      <Route path="/" element={<Home scrollTo=""/>} />
    </Routes>
    </MantineProvider>
  )
}

export default App
