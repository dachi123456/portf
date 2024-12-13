import MyButton from "../button/MyButton";
import './details.css';
import { useNavigate } from "react-router-dom";

const DetailsCard = ({ projectName, img, liveLink, githubLink, description, Child }) => {
  const navigate = useNavigate()
 
  return (
    <div className="details-div">
      <div className="details-main-div">
        <h1 className="text-center fs-1 p-3">{projectName.toUpperCase()}</h1>
        <div className="w-75 m-auto mt-4">
          <p className="text-center fw-bold-normal fs-5">{description}</p>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <a href={liveLink}><MyButton text={'LIVE LINK'} width={'13rem'} padding="1.3rem" /></a>
        </div>
      </div>
      <div className="w-75 p-1 m-auto">
        <div className="w-100 m-auto detail-img mt-5">
          <img src={img} alt="" className="w-100" />
        </div>
      </div>
      <div>
        {Child}
      </div>
      <div className="w-75 m-auto d-flex gap-2 mt-4 details-links">
        <a href={githubLink}><MyButton text={'CODE'} width={'10rem'} /></a>
        <MyButton text={'BACK'} width={'10rem'} bgcolor={'#fff'} color={"#7843e9"} border={"1px solid #7843e9"} onClick={() => navigate(-1)}/>
      </div>
    </div>
  );
}

export default DetailsCard;
