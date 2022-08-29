import {Link} from 'react-router-dom';


const TickerLink = (props) => {
  return (
    <Link to={"/search/" + props.ticker} className="item">{props.ticker}</Link>
  )
}


export default TickerLink;
