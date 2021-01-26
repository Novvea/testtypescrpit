import {useContext} from 'react'
import {UserContext} from '../../shared/provider/UserProvider'
import './Profile.css'

export const Profile = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
  return (
    <div>
       <img className='profilePicture' src={'https://thispersondoesnotexist.com/image'} alt='Userprofilepicture'/> 
      {authenticatedUser.username}
    </div>
  )
}
