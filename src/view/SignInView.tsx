import { useState, useContext } from 'react'
import { loginCredentials } from '../shared/interface/Interface'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'

export const SignInView = () => {
	const history = useHistory()
	const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({ username: '', password: '' })
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const signIn = () => {
		localStorage.setItem('user', loginCredentials.username)
		setAuthenticatedUser(loginCredentials)
		history.push(RoutingPath.homeView) /* Flyttas till homeview när värdena sparats */
	}

	return (
		<div>
			<h1>{loginCredentials.username}</h1>
			<form>
				<input
					placeholder='username'
					onChange={event => setLoginCredentials({ ...loginCredentials, username: event.target.value })} /> <br />
				<input
					placeholder='password'
					onChange={event => setLoginCredentials({ ...loginCredentials, password: event.target.value })} />
				<button onClick={() => signIn()}>Sign in</button>
			</form>
		</div>
	)
}
