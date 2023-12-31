import React from 'react'

import './actionbar.scss'

const Actionbar = () => {
  return (
    <div className="main-ribbon">
        <div className="inventory-management-text">
            Main Dashboard
        </div>

        <div className="user-details">
          <img className='user-image' src='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg' alt="profile" />
          <div className="profile-details">
              <span className='username'>Nimal Wedagedara</span>
              <span className='designation'>Manager</span>
          </div>
        </div>
    </div>
  )
}

export default Actionbar