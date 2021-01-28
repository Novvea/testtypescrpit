import './ProfileDropDown.css'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const ProfileDropDown = () => {
  const history = useHistory()
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

  const logOut = () => {
    setAuthenticatedUser(false) /* undefined, false, null eller tom string */
    localStorage.removeItem('user')
    history.push(RoutingPath.homeView)
  }

  return (
    <div className='profileDropDown'>
      <span>alternativ1</span>
      <span>alternativ2</span>
      <span>alternativ3</span>
      <span onClick={() => logOut()}>Sign out</span>
    </div>
  )
}
