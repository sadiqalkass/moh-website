import {useState,useEffect} from 'react'

const Staff = (props) => {
const [status, setStatus] = useState(null)
/* Check the REAME.md for more info */
useEffect(
  function statusHandler(){
    let statusCl = props.status
    if (statusCl == 'Active') {
     setStatus('active staff-stat')
    }
    else if (statusCl == 'Not active') {
     setStatus('notActive staff-stat')
    }
    else if (statusCl == 'Sick leave') {
     setStatus('sickLv staff-stat')
    }
    else if (statusCl == 'In Traning') {
     setStatus('inTraning staff-stat')
    }else{
      setStatus('')
    }
  }
,[])
  return (
    <tr>
      <td className='name-td'>
        <span className='icon-span'><span><ion-icon name="person"></ion-icon></span></span>
        <span className='name-span'>
          <p>{props.name}</p>
          <span>{props.email}</span>
        </span>
      </td>
      <td>{props.role}</td>
      <td>
        <span className={status}>
          {props.status}
        </span>
        
      </td>
      <td className='dtAdd-td'>
        <p>{props.dateAdded}</p>
        <span className='icon-span'><ion-icon name="more"></ion-icon>{props.more}</span>
      </td>
    </tr>
  )
}

export default Staff
