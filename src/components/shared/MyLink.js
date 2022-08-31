import {useEffect} from 'react';
import {Link} from 'react-router-dom';


const MyLink = (props) => {

  useEffect(() => {window.scrollTo(0, 0)}, [])

  return (
    <Link style={props.style} to={props.path} className="item">{props.text}</Link>
  )
}


export default MyLink;
