import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { NotificationContainer, } from 'react-notifications';
import DataApi from '/src/data/api'
import UserOverlay from './gui/UserOverlay'

const Header = (props) => (
  <header>
    <nav>
      <div className="rawLinks">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li>Users:
            {DataApi.users.map(user_data => { return (
              <Link to={`/type1/user/${user_data.id}`}>{user_data.id}</Link>
            )})}
          </li>
        </ul>
      </div>
    </nav>
    <NotificationContainer />
  </header>
)

export default withRouter(Header)