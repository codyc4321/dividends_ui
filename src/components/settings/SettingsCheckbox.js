import React from 'react';


const SettingsCheckbox = ({id, label, callback}) => {

  return (
    <div style={{width: '200px'}}>
      <input
        type="checkbox"
        id={id}
        name={id}
        value={id}
        onChange={(e) => callback(e)}  /> &nbsp;
      <label htmlFor="main_info">{label}</label><br/>
    </div>
  );
}


export default SettingsCheckbox;
