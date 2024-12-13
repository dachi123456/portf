import { useParams } from "react-router-dom"
import data from "../../projectsData/data"
import DetailsCard from "./DetailsCard"
import SkillCard from "../skillCard/SkillCard"

const DetailsList = () => {
    const param = useParams()
    const filteredData = data.find(project => parseInt(param.id) === project.id)

  return (
    <div>
        <DetailsCard 
        description={filteredData.shortDescr} 
        githubLink={filteredData.github}
        img={filteredData.img}
        liveLink={filteredData.demo}
        projectName={filteredData.name}
        Child={
            <div className="w-75 m-auto tools-div mt-5">
                <h3>Tools Used</h3>
                <div className="d-flex flex-wrap direction-row gap-2">
                    {filteredData.tools.map((tool,index) => (
                        <div key={index}>
                            <SkillCard skill={tool}/>
                        </div>
                    ))}
                </div>
            </div>}
        />

    </div>
  )
}

export default DetailsList