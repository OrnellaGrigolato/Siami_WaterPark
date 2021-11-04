import React from 'react'
import { Calendar } from 'antd';
import './date.css'
function Date() {
    function onPanelChange(value, mode) {
        console.log(value, mode);
      }
    return (
        <div>
            <div className="site-calendar-demo-card">
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} onSelect={onPanelChange} />
            </div>
        </div>
    )
}

export default Date
