import React from 'react';
//-- Components
import Header from './components/Header';
//-- Styles
import { Wrapper } from './App.styles';


//-- Types
export type TaskType = {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

const onAdd = () => {console.log("onAdd")};
const showAdd = () => {console.log("showAdd")};

function App() {
  return (
    <Wrapper>
      <Header title="Task Tracker" onAdd={onAdd} showAdd={showAdd} />
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
        )} />
        <Route path='/about' component={About} />
        <Footer /> */}
    </Wrapper>
  );
}

export default App;
