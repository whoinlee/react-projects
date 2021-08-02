import { FaTimes } from 'react-icons/fa';
//-- Styles
import { Wrapper } from './Task.styles';
//-- Types
import { TaskType } from './DataTypes';
// export type TaskType = {
//     id: number;
//     text: string;
//     day: string;
//     reminder: boolean;
//   }


type Props = {
  task: TaskType;
}
const Task:React.FC<Props> = ( {task} ) => {
  return (
    <Wrapper>
      <h3>{task.text} <FaTimes className='faTimes' /></h3>
      <p>{task.day}</p>
    </Wrapper>
  )
}

export default Task
