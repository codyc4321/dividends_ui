import React from 'react';

import SettingsCheckbox from './SettingsCheckbox';



const SettingsView = ({data}) => {

  // const renderCheckboxes = () => {
  //   return data.map((checkbox_info) => {
  //     return <SettingsCheckbox key={data.id} id="main_info" label="Main info" callback={checkbox_info.callback}/>;
  //   });
  // }

  const checkboxes = data.map((checkbox_info) => {
      return (
          <SettingsCheckbox
            key={checkbox_info.id}
            id={checkbox_info.id}
            label={checkbox_info.label} 
            callback={checkbox_info.callback}/>
      )
    });

  return (
    <div className="ui segment">
      {checkboxes}
    </div>
  );
}


export default SettingsView;
