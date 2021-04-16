import React, { useState } from 'react';
import Select from 'react-select'
import './StatusUpdate.css';
const options = [
    { value: 'Not Started', label: 'Not Started' },
    { value: 'Running', label: 'Running' },
    { value: 'Finished', label: 'Finished' }
]
const StatusUpdate = ({courseStatus, id}) => {
    const [status, setStatus] = useState(courseStatus);
    console.log(id);
    const changeStatus = (id) => {
        console.log(id, status);
        
    }
    return (
        <div className="status-update">
            
            <Select options={options}
                onChange = {value => setStatus(value.value)}
                defaultValue={{ label: courseStatus, value: courseStatus }} />
            <button onClick={() => changeStatus(id)}>Ok</button>
            
        </div>
    );
};

export default StatusUpdate;