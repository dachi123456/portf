import './footer.css'
import linkedIn from '../../assets/icons/linkedin-161-svgrepo-com.svg'
import facebook from '../../assets/icons/facebook-svgrepo-com.svg'
import instagram from '../../assets/icons/instagram-svgrepo-com.svg'
import github from '../../assets/icons/github-svgrepo-com.svg'

const Footer = () => {
  return (
    <div className="footer-div">
        <div>
            <h6 className="fw-bold">Dachi Gikorashvili</h6>
            <p className="w-100">
                A Frontend focused Web Developer building 
                the Frontend of Websites and Web Applications 
                that leads to the success of the overall product
            </p>
        </div>

        <div className="socials-div">
            <h6 className='fs-4'>Socials</h6>
            <div className='d-flex align-items-center'>
                <a href="https://www.linkedin.com/in/dachi-gikorashvili-39a973254/"><img src={linkedIn} alt="" className='ms-0'/></a>
                <a href="https://www.facebook.com/dachi.giqorashvili.9/"><img src={facebook} alt="" className='fb-icon'/></a>
                <a href="https://github.com/dachi123456"><img src={github} alt="" /></a>
                <a href="https://www.instagram.com/dachigik/?igsh=aG5wcTZuZ3dkeHQx"><img src={instagram} alt="" /></a>

            </div>
        </div>
    </div>
  )
}

export default Footer