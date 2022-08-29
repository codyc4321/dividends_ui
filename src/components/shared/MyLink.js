import {Link} from 'react-router-dom';


const MyLink = (props) => {
  return (
    <Link to={props.path} className="item">{props.text}</Link>
  )
}


export default MyLink;
