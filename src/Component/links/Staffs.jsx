import React from 'react'
import Staff from './Smcomponent/Staff'

const Staffs = () => {
  return (
    <section className='staffs-cont'>
      <div className="section-head">
        <h2>Staffs</h2>
        <button><span><ion-icon name="add"></ion-icon></span>Add Staff</button>
      </div>
      <div className="sub-cont">
        <div className="subCont-head">
          <p>Showing 1-6 result out of 20</p>
          <div className="search-div">
                <span><ion-icon name="search"></ion-icon></span>
                <input type="text" placeholder='Search staff...'/>   
              </div>
        </div>
          <table>
            <tr className='tb-head'>
              <th>Name</th>
              <th>Roles</th>
              <th>Status</th>
              <th>Date Added</th>
            </tr>
            <Staff
              name={'John Richards'}
              email={'johnrichards@gmail.com'}
              role={'Tailor'}
              status={'In Traning'}
              dateAdded={'4th Apr'}
              more={<ion-icon name="more"></ion-icon>}
            />
            <Staff
              name={'John Richards'}
              email={'johnrichards@gmail.com'}
              role={'Tailor'}
              status={'Active'}
              dateAdded={'4th Apr'}
              more={<ion-icon name="more"></ion-icon>}
            />
            <Staff
              name={'John Richards'}
              email={'johnrichards@gmail.com'}
              role={'Tailor'}
              status={'Not active'}
              dateAdded={'4th Apr'}
            />
            <Staff
              name={'John Richards'}
              email={'johnrichards@gmail.com'}
              role={'Tailor'}
              status={'Sick leave'}
              dateAdded={'4th Apr'}
            />
          </table>
      </div>
    </section>
  )
}

export default Staffs
