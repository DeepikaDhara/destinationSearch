// Write your code here
import './index.css'
const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name, id} = destinationDetails
  return (
    <li>
      <img src={imgUrl} />
      <p className="paragraph">{name}</p>
    </li>
  )
}
export default DestinationItem
