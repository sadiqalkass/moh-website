import React from 'react'
import Task from './Smcomponent/Task'
const Tasks = () => {
  return (
    <section className='tasks-cont'>
      <div className="section-head">
        <h2>Tasks</h2>
        <button><span><ion-icon name="add"></ion-icon></span>Add Task</button>
      </div>
      <div className="sub-cont">
        <div className="subCont-head">
          <div className="search-div">
            <span><ion-icon name="search"></ion-icon></span>
            <input type="text" placeholder='Search anything...'/>   
          </div>
          <button><span><ion-icon name="add"></ion-icon></span>Add Task</button>
        </div>
        <div className="status-cont">
          <div className="status-div">
            <span className='main-span'>
              <p>To Do</p>
              <span className='num-span fr'>3</span>
            </span>
            <span className='icon-span'> <span><ion-icon name="options"></ion-icon></span></span>
          </div>
          <div className="status-div">
            <span className='main-span'>
              <p>In progress</p>
              <span className='num-span sec'>3</span>
            </span>
            <span className='icon-span'><span><ion-icon name="options"></ion-icon></span></span>
          </div>
          <div className="status-div">
            <span className='main-span'>
              <p>Done</p>
              <span className='num-span thir'>1</span>
            </span>
            <span className='icon-span'><span><ion-icon name="options"></ion-icon></span></span>
          </div>
        </div>
        <div className="task-div">
          <Task
            head={'Medium'}
            title={'Sew A-Line Dress'}
            detail={'Sew an A-Line dress for a costomer'}
            date={'14th Feb'} 
           />
          <Task
            head={'High'}
            title={'Babban riga'}
            detail={'Sew an A-Line dress for a costomer'}
            date={'20th Sep'} 
           />
          <Task
            head={'Low'}
            title={'Sew A-Line Dress'}
            detail={'Sew an A-Line dress for a costomer'}
            date={'1st Feb'} 
           />
        </div>
      </div>
    </section>
  )
}

export default Tasks
