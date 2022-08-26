import React from 'react';


const DisplayToggler = (props) => {
  return (
    <span
      style={{cursor: 'pointer', fontSize: '24px'}}
      onClick={props.toggleCallback}>
        &nbsp;&nbsp;{props.displaySetting.visible ? '-' : '+'}&nbsp;&nbsp;
    </span>

  )
}


export default DisplayToggler;
