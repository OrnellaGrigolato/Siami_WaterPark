import React from 'react';
import { Calendar } from 'antd';
import './date.css';

function Date(props) {
  function onPanelChange(value) {
    functionHandler(value.format('MM-DD-YYYY'));
  }
  const functionHandler = (data) => {
    props.passDate(data);
  };

  return (
    <div>
      <h2>Select when you want to visit us</h2>
      <div className="site-calendar-demo-card">
        <Calendar fullscreen={false} onPanelChange={onPanelChange} onSelect={onPanelChange} />
      </div>
    </div>
  );
}

export default Date;
