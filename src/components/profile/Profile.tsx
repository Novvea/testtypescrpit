import {useContext} from 'react'
import {UserContext} from '../../shared/provider/UserProvider'
import './Profile.css'

export const Profile = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
  return (
    <div className='profileWrapper'>
       <img className='profilePicture' src={'https://thispersondoesnotexist.com/image'} alt='Userprofilepicture'/> 
      {authenticatedUser.username}
      <div className='profileDropdown'>
        <span>alternativ1</span>
        <span>alternativ2</span>
        <span>alternativ3</span>
      </div>
    </div>
  )
}
