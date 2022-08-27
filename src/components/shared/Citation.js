

const Citation = (props) => {
  return (
    <p style={{fontSize: '10px'}}>{props.title}, &nbsp;
      <a href={props.url} target="_blank">{props.url}</a>
    </p>
  )
}


export default Citation;
