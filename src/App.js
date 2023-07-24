import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Task from './Task';

function App() {
  let [task,setTask] = useState();
  let [taskItems,setTaskItems]=useState([]);

  function handleAddTask(){
    if(task=='') return;
    setTaskItems([...taskItems,task]);
    setTask('');
  }
  const completeTask=(index)=>{
    let itemsCopy=[...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }
  const change = (e) =>{
    let {value} = {...e.target};
    setTask(value);
  }

  return (
    
    <div className='container'>
      <div className='tasksWrapper'>
        <div className='sectionTitle'> Todo List</div>
        <div className='scrollView'>
          <div className='items'>
            {
              taskItems.map((item,index)=>{
                return(
                  <div key={index} onClick={()=>completeTask(index)}>
                    <Task text={String(item)}></Task>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='writeTaskWrapper'>
          <input className='input' placeholder='write a task' cols={1} value={task} onChange={change}></input>
          <div className='addWrapper' onClick={handleAddTask}>
            <div style={{fontSize:'40px',bottom:'30px',color:'gray'}}>+</div>
          </div>
          
      </div>
    </div>
  );
}

export default App;
