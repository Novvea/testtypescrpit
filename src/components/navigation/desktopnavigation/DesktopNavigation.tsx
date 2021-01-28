import './DesktopNavigation.css'
import Logotype from '../../../shared/images/logotype.svg'
import { useContext } from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../shared/provider/UserProvider'
import {Profile} from '../../profile/Profile'
import { DesktopNavigationTabs } from './desktopnavigationtabs/DesktopNavigationTabs'
import { useHistory } from 'react-router-dom'


export const DesktopNavigation = () => {
	const history = useHistory()
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

/* 	const displayUser = () => {
		return authenticatedUser?.username ? <Profile/> : <span onClick={() => history.push(RoutingPath.signInView)}>Signin</span>
	} */
	const displayUsernameOrLogin = () => {
		return authenticatedUser?.username ? <div className='profile'><Profile/> </div> : <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}>SIGN IN</span>
	}

	return (
		<div className='desktopNavigationWrapper'>
			<img className='navigationLogotype'
				src={Logotype}
				alt={''} />
				<div className='desktopNavigationTabs'>
					<DesktopNavigationTabs />
				</div>
			{displayUsernameOrLogin()}
			{/*<span>{authenticatedUser?.username}</span> */} {/* lägger till ? pga har inget username från första början = optional shaning innan fick skriva if( null || undefined)*/}
		</div>
	)
}
