import React from 'react'

const Sidebar = () => {
  return (
    <div class="sidebar">
            <nav class="navigation">
                 <div class="brand_space">
                        <span class="nav_name">Logo Here</span>
                    </div>
                    <hr />
                <ul>
                    <div className="frul-div">

                        <li>
                            <a href="#">
                                <span class="icon"><ion-icon name="grid"></ion-icon> </span>
                                <span class="nav_name">Dasboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon"><ion-icon name="person"></ion-icon></span>
                            <span class="nav_name">Staff</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon"><ion-icon name="clipboard"></ion-icon></span>
                                <span class="nav_name">Tasks</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon"><ion-icon name="briefcase"></ion-icon></span>
                                <span class="nav_name">Store</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon"><ion-icon name="person"></ion-icon></span>
                                <span class="nav_name">Costomer</span>
                            </a>
                        </li>
                    </div>
                    <div className='scul-div'>
                        <hr className='sec-line'/>
                        <li>
                            <a href="#">
                                <span class="icon"><ion-icon name="help-circle-outline"></ion-icon></span>
                                <span class="nav_name">Help center</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon"><ion-icon name="settings"></ion-icon></span>
                                <span class="nav_name">Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon"> <ion-icon name="log-out"></ion-icon> </span>
                                <span class="nav_name">Quit</span>
                            </a>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
  )
}

export default Sidebar
