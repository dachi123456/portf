import useScrollVisibility from '../../hooks/useScrollVisibility'
import useSmoothScroll from '../../hooks/useSmoothScroll'
import MyButton from '../button/MyButton'
import './mainComponent.css'
import cv from '../../../public/Resume.pdf'

const MainComponent = () => {
  const smoothScrollToSection = useSmoothScroll()
  const isVisible = useScrollVisibility('main', 0.5);
  

  return (
    <div className={`main-div pt-5 ${isVisible ? 'isVisible' : ''}`} id='main'>
        <div className='w-75 m-auto mt-5'>
            <h1 className='text-center fw-bold'>
                HEY, I AM DACHI GIKORASHVILI
            </h1>
            <p className='text-center margin-auto mt-4 '>
                A Frontend focused Web Developer building the Frontend of Websites
                and Web Applications that leads to the success of the overall
                product
            </p>
            <span className='w-100 d-flex gap-2 justify-content-center mt-5' >
            <MyButton text={'PROJECTS'} width={'10rem'} onClick={() => smoothScrollToSection('projects')}/>
            <a href={cv} download>
                <MyButton text={'Download CV'} width={'10rem'} bgcolor='white' color='#7843e9' border='1px solid #7843e9'/>
            </a>
            </span>
        </div>
    </div>
  )
}

export default MainComponent