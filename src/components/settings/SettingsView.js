import React from 'react';

import SettingsCheckbox from './SettingsCheckbox';



const SettingsView = ({data}) => {

  const checkboxes = data.map((checkbox_info) => {
      return (
          <SettingsCheckbox
            key={checkbox_info.id}
            id={checkbox_info.id}
            label={checkbox_info.label}
            toggler={checkbox_info.toggler}
            setter={checkbox_info.setter}/>
      )
    });

  return (
    <div className="ui segment">
      {checkboxes}
    </div>
  );
}


export default SettingsView;
