import React from 'react'

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="fr-div tp-div">
          <span><ion-icon name="search"></ion-icon></span>
          <input type="text" placeholder='Search anything...'/> 
        </div>
        <div className="sec-div tp-div">
            <span><ion-icon name="notifications-outline"></ion-icon></span>
            <div className="topbr-img">
                <span><ion-icon name="person"></ion-icon></span>
                <div className="pic-cont">
                  <p className='username'>Muh'd Baffa</p>
                  <p>Admin</p>
                </div>
            </div>
            <span><ion-icon name="options"></ion-icon></span>
        </div>
      
    </div>
  )
}

export default Topbar
