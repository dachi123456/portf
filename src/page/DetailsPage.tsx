import { useEffect } from "react"
import DetailsList from "../components/details/DetailsList"

const DetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0 , 0)
    return () => {}
  } , [])
  
  return (
    <div>
      <DetailsList />
    </div>
  )
}

export default DetailsPage