import AboutMe from "../components/about/AboutMe"
import Contact from "../components/contact/Contact"
import MainComponent from "../components/main/MainComponent"
import Projects from "../components/projects/Projects"
import arrow from '../assets/arrow-narrow-up-svgrepo-com.svg'
import useSmoothScroll from "../hooks/useSmoothScroll"
import Footer from "../components/footer/Footer"
import linkedIn from '../assets/icons/linkedin-161-svgrepo-com.svg'
import facebook from '../assets/icons/facebook-svgrepo-com.svg'
import instagram from '../assets/icons/instagram-svgrepo-com.svg'
import github from '../assets/icons/github-svgrepo-com.svg'
import './mainpage.css'
const MainPage = () => {
  const smoothScrollToSection = useSmoothScroll()
  
  return (
    <div className="position-relative">
        <MainComponent />
        <AboutMe />
        <Projects />
        <div className="mt-5">
        <div className="mt-5">
        <Contact />
        </div>
        </div>
        <div onClick={() => smoothScrollToSection('main')} className="p-2 position-fixed" style={{backgroundColor:'black',width:'3.5rem',bottom:10,right:10,borderRadius:'50%',background:'#7843e9',cursor:'pointer',zIndex:'100'}}>
          <img src={arrow} alt="" className="w-100"/>
        </div>
        <div className="media-fixed">
        <a href="https://www.linkedin.com/in/dachi-gikorashvili-39a973254/"><img src={linkedIn} alt="" className='ms-0'/></a>
                <a href="https://www.facebook.com/dachi.giqorashvili.9/"><img src={facebook} alt="" className='fb-icon'/></a>
                <a href="https://github.com/dachi123456"><img src={github} alt="" /></a>
                <a href="https://www.instagram.com/dachigik/?igsh=aG5wcTZuZ3dkeHQx"><img src={instagram} alt="" /></a>
        </div>
        <Footer />
    </div>
  )
}

export default MainPage