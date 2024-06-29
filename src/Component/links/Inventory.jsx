import React from 'react'
import Staff from './Smcomponent/Staff'

const Inventory = () => {
  return (
    <section className='inventory-cont'>
      <div className="section-head">
        <h2>Inventory</h2>
        <button><span><ion-icon name="add"></ion-icon></span>Add Inventory</button>
      </div>
      <div className="sub-cont">
        <div className="subCont-head">
          <p>Showing 1-6 result out of 20</p>
          <div className="search-div">
                <span><ion-icon name="search"></ion-icon></span>
                <input type="text" placeholder='Search Inventory...'/>   
              </div>
        </div>
        <table>
          <tr className='tb-head'>
            <th>Name</th>
            <th>Category</th>
            <th>Stock level</th>
            <th>Price</th>
          </tr>
          <Staff
              name={'Red Slik Fabirc'}
              role={'Fabric'}
              status={'10'}
              dateAdded={"$13"}
              more={<ion-icon name="more"></ion-icon>}
            />
        </table>
      </div> 
    </section>
  )
}

export default Inventory
