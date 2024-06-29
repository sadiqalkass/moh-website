import React from 'react'

const Task = (props) => {
  return (
    <div className='single-task'>
      <div className="req-div">
        <span className={props.head === 'Medium' ? 'medium' : ' '}>{props.head}</span>
        <span className='iocn'></span>
      </div>
      <div className="task-content">
        <h3>{props.title}</h3>
        <p>{props.detail}</p>
      </div>
      <hr />
      <div className="date-div">
        <span>
            <span className='icon ls-icon'></span>
            <p>{props.date}</p>
        </span>
        <span><span><ion-icon name="person"></ion-icon></span></span>
      </div>
    </div>
  )
}

export default Task
