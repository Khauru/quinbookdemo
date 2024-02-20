import About from "./About/About";
import Welcome from "./Welcome/Welcome";
import Funktionen from "./Funktionen/Funktionen";
import Reviews from "./Reviews/Reviews";
import { useEffect } from "react";
import "animate.css/animate.min.css";
import {motion} from 'framer-motion';

type HomeProps = {
    scrollTo: string;
  };

function Home({scrollTo}: HomeProps) {

    const variantsWelcome= {
        visible: { opacity: 1, transition: { duration: 1 } },
        hidden: { opacity: 0 },
      };
    const variantsRest = {
        visible: { opacity: 1, transition: { duration: 2.5 } },
        hidden: { opacity: 0 },
      };

    useEffect(() => {
        if (scrollTo) {
          const section = document.getElementById(scrollTo);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, [scrollTo]);

    return (
        <>  
            <motion.div initial="hidden" whileInView="visible" variants={variantsWelcome} viewport={{once:true}}>
              <Welcome />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" variants={variantsRest} viewport={{once:true}}>
              <About />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" variants={variantsRest} viewport={{once:true}}>
            <Funktionen />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" variants={variantsRest} viewport={{once:true}}>
            <Reviews />
            </motion.div>
        </>
    )
}

export default Home