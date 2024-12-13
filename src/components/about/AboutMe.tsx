import useScrollVisibility from '../../hooks/useScrollVisibility'
import useSmoothScroll from '../../hooks/useSmoothScroll'
import MyButton from '../button/MyButton'
import SkillCardList from '../skillCard/SkillCardList'
import './about.css'

const AboutMe = () => {
  const smoothScrollToSection = useSmoothScroll()
  const isVisible = useScrollVisibility('about', 0.5);
 
  return (
    <div className={`about-div pt-5 m-auto pb-md-5 ${isVisible ? 'isVisible' : ''}`} id='about'>
       <div className='w-75 m-auto'>
       <div className='w-75 m-auto mt-5'>
         <h1 className='text-center fw-bold'>ABOUT ME</h1>
         <div className='line m-auto'></div>
        </div>
        <div>
            <p className='text-center mt-5'>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
            </p>
        </div>
        <div className="row pb-md-5 mt-md-5 info-divs">
        <div className='mt-5 col-md-6 gettoknow-div'>
            <h4 className='fw-bold'>Get to know me!</h4>
            <p className='mt-1'>
                I am a highly motivated and enthusiastic
                beginner front-end developer with 1 year 
                in programming. With a strong foundation in Html,
                Css, JavaScript, TypeScript, React. I am 
                eager to apply my skills and learn new technologies
            </p>
            <p>
            opportunities where I can
            contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience then don't hesitate to
            </p>
            <div className='mt-4' onClick={() => smoothScrollToSection('contact')}>
            <MyButton text={'CONTACT'} width={'10rem'} padding='0.6rem'/>
            
            </div>
            
        </div>
        <div className='p-1 mt-5 pb-5 col-md-6 ps-md-5 skills-div'>
                <h5 className='fw-bold'>MY SKILLS</h5>
                <SkillCardList />
          </div>
        </div>
       </div>
    </div>
  )
}

export default AboutMe