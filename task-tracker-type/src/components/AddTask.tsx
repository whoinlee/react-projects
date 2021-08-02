import React, {useState} from 'react';
//-- Styles
import { Wrapper } from './AddTask.styles'
//-- Types
// import { TaskType } from './DataTypes';


const AddTask = () => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit:React.FormEventHandler = (e:React.FormEvent<HTMLInputElement>) => {
    console.log("AddTask :: onSubmit");
    e.preventDefault();
    if (!text) {
        alert('Please add a task');
    }

    // onAdd( { text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <Wrapper onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Task</label>
          <input type="text" placeholder="Add Task" 
                  onChange={e=>setText(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label>Day & Time</label>
          <input type="text" placeholder="Add Day & Time" 
                  onChange={e=>setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
          <label>Set Reminder</label>
          <input type="checkbox" 
                  checked={reminder}
                  onChange={e => setReminder(e.currentTarget.checked)} />
        </div>

        <input type='submit' value='Save Task' className='btn btn-block' />
    </Wrapper>
  )
}

export default AddTask
