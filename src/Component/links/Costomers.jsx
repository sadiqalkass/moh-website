import React from 'react'
import Staff from './Smcomponent/Staff'

const Costomers = () => {
  return (
    <section className='costomers-cont'>
       <div className="section-head">
        <h2>Costomers</h2>
        <button><span><ion-icon name="add"></ion-icon></span>Add Costomers</button>
      </div>
      <div className="sub-cont">
        <div className="subCont-head">
          <p>Showing 1-6 result out of 20</p>
          <div className="search-div">
                <span><ion-icon name="search"></ion-icon></span>
                <input type="text" placeholder='Search costomer...'/>   
              </div>
        </div>
          <table>
            <tr className='tb-head'>
              <th>Name</th>
              <th>Phone No.</th>
              <th>Gender</th>
              <th>Date Added</th>
            </tr>
            <Staff
              name={'John Richards'}
              email={'johnrichards@gmail.com'}
              role={'+23490314567'}
              status={'Male'}
              dateAdded={'4th Apr'}
              more={<ion-icon name="more"></ion-icon>}
            />
          </table>
      </div>
    </section>
  )
}

export default Costomers
