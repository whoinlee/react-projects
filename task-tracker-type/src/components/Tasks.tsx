import React  from 'react';
//-- Components
import Task from './Task';
//-- Types
import { TaskType } from './DataTypes';
// export type TaskType = {
//     id: number;
//     text: string;
//     day: string;
//     reminder: boolean;
//   }


type Props = {
    tasks: TaskType[];
    onDelete: () => void;    //TODO
    onToggle: () => void;    //TODO
}
const Tasks:React.FC<Props> = ( {tasks, onDelete, onToggle} )  => {
  return (
    <>
    {tasks.map((task, index) => 
        <Task key={task.id} task={task}/>
    )}
      {/* <h1>No Tasks To Show</h1> */}
    </>
  )
}

export default Tasks