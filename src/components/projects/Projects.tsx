import './projects.css'
import data from '../../projectsData/data'
import ProjectCard from './ProjectCard'
import useScrollVisibility from '../../hooks/useScrollVisibility';

const Projects = () => {
  const isVisible = useScrollVisibility('projects', 0.5);
 
  return (
    <div className={`mt-5 overflow-x-hidden ${isVisible ? 'isVisible' : ''}`} id='projects'>
        <div className='w-75 m-auto mt-5'>
            <h1 className='text-center'>PROJECTS</h1>
            <div className='line m-auto'></div>
        </div>
        <div className='mt-4 w-75 m-auto'>
        <p className='text-center'>
            Here you will find some of the personal projects
            that I created with each project containing its own case study
        </p>
        </div>
        <div>
          {data.map(proj => (
            <div className='mt-1 cardlist' key={proj.id}>
              <ProjectCard key={proj.id} img={proj.img} name={proj.name} shortDescr={proj.shortDescr} id={proj.id}/>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Projects