import React, {useState} from 'react';


const SettingsCheckbox = ({id, label, toggler, setter}) => {

  const [checked, setChecked] = useState(true)
  return (
    <div style={{width: '200px'}}>
      <input
        type="checkbox"
        checked={checked}
        id={id}
        name={id}
        value={id}
        onChange={(e) => {
          setChecked(!checked);
          toggler(e, setter);
        }} /> &nbsp;
      <label htmlFor="main_info">{label}</label><br/>
    </div>
  );
}


export default SettingsCheckbox;
