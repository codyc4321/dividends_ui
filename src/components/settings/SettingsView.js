import React from 'react';

import SettingsCheckbox from './SettingsCheckbox';



const SettingsView = ({data}) => {

  const checkboxes = data.map((checkbox_info) => {
      return (
        <div key={checkbox_info.id}>
          <SettingsCheckbox
            id={checkbox_info.id}
            label={checkbox_info.label}
            toggler={checkbox_info.toggler}
            setter={checkbox_info.setter}/>
          <br/>
        </div>
      )
    });

  return (
    <div className="ui segment">
      {checkboxes}
    </div>
  );
}


export default SettingsView;
