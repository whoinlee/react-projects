import {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//-- Components
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import About from './components/About';
//-- Styles
import { Wrapper } from './App.styles';
//-- Types
import { TaskType } from './components/DataTypes';
// export type TaskType = {
//   id: number;
//   text: string;
//   day: string;
//   reminder: boolean;
// }


const tasksArr:TaskType[] = [
  {
      "text": "Doctors Appointment",
      "day": "Feb 6th at 1:30pm",
      "reminder": true,
      "id": 1
    },
  {
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true,
      "id": 2
  },
  {
      "text": "new task",
      "day": "evening",
      "reminder": false,
      "id": 3
  },
]

const onAdd = () => {console.log("onAdd")};
const showAdd = () => {console.log("showAdd")};

function App() {
  const [tasks, setTasks] = useState(tasksArr);
  const onDelete = () => {console.log('onDelete')};
  const onToggle = () => {console.log('onToggle')};

  return (
    <Router>
      <Wrapper>
        <Header title="Task Tracker" onAdd={onAdd} showAdd={showAdd} />
        <Route path='/' >
          <AddTask />
          <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
        </Route>
        <Route path='/about' component={About} />
        <Footer />
        {/* <Header onAdd={() => setShowAddTask(!showAddTask)} 
                  showAdd={showAddTask} /> */}
          {/* <Route path='/' exact render={(props) => (
            <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} 
                                  onDelete={deleteTask} 
                                  onToggle={toggleReminder}/> 
                              : 'No Tasks To Show'}
            </>
          )} /> */}
      </Wrapper>
    </Router>
  );
}

export default App;
