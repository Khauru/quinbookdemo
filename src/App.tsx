
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
  date: '21.02.2020 14:53:49 Uhr' },
  { id: '2', 
  title: 'Erfahrungsbericht Elude Escape Rooms', 
  content: `Die Elude Escape Rooms sind seit 2017 geöffnet, und wir haben ein Buchungssystem verwendet, das ursprünglich für Haunted Houses konzipiert war und für die Nutzung von Escape Rooms angepasst wurde.

  Darren und ich verbrachten Stunden damit, viele verschiedene Optionen zu recherchieren, um das Beste für uns zu finden.  Im Laufe der Zeit stellten wir jedoch fest, dass es nicht immer unseren Bedürfnissen entsprach, und wir hatten Mühe, das System für uns effizient zu gestalten.
  
  Es war an der Zeit, den Forschungsprozess wieder aufzunehmen.
  
  QuinBook habe ich über Google gefunden.
  
  Ich glaube, sie waren überrascht, von einem australischen Unternehmen zu hören, da sie in Deutschland ansässig sind.  Nachdem wir uns das System jedoch angesehen und eine Demonstration von Heiko erhalten hatten, waren wir sehr beeindruckt von dem, was sie zu bieten hatten.
  
  Wir freuen uns, dass wir ihr erster australischer Kunde sind und QuinBook bei der Einrichtung für den australischen Markt unterstützt haben.
  
  Der Implementierungsprozess war ein Kinderspiel, mit außergewöhnlicher Unterstützung von QuinBook.  Wenn etwas nicht funktioniert, wird es umgesetzt, und wenn man eine neue Idee vorschlägt, wird diese übernommen und es wird immer nach Möglichkeiten gesucht, das System zu verbessern.
  
  Wir sind seit Juni 2019 ein glücklicher Kunde.
  
  Quinbook wurde von Escape Room-Besitzern für Escape Room-Besitzer entworfen.
  
  Es gab mehrere Dinge, die unser Interesse geweckt hat.`, 
  date: '28.02.2020 14:41:45 Uhr' },
  { id: '3', 
  title: 'Erfahrungsbericht Mysteria Escape', 
  content: `Mysteria Escape ist seit August 2018 am Markt. Vor der Eröffnung hatte ich mir in Wordpress durch Plug-Ins selber einen Ticketshop mit Online-Zahlung gebaut. Diese Lösung hat einmalig 50 Euro gekostet und war grundsätzlich erst mal nicht schlecht, aber wir mussten sehr viel anpassen, damit es so ist, wie wir es brauchten. Einige Monate vor der Eröffnung wurden wir dann auf QuinBook aufmerksam und haben uns in einer Websession die Software vorführen lassen. Wir waren ja Neulinge und konnten selber ja noch gar nicht definieren, welche Features eine Buchungs- und Management Software haben sollte. Umso mehr waren wir geflasht und uns wurde nach der Websession erst richtig bewusst, wie viel administrativen Aufwand wir uns ersparen können, wenn wir gleich eine vernünftige Lösung lizensieren. Wir hörten auf unser Bauchgefühl und wurden Teil der QB-Familie. Diese Entscheidung haben wir NIE bereut.`, 
  date: '03.02.2020 16:21:01 Uhr' }
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
