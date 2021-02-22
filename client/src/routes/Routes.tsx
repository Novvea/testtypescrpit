import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import RoutingPath from './RoutingPath'
import { SignInView } from '../view/SignInView'
import { UserContext } from '../shared/provider/UserProvider'
import { useEffect, useContext } from 'react'
import { AccessoriesView} from '../view/navigationtabviews/accessories/AccessoriesView'
import { BrandsView } from '../view/navigationtabviews/brands/BrandsView'
import { ExpertiseView } from '../view/navigationtabviews/expertise/ExpertiseView'
import { NewsView } from '../view/navigationtabviews/news/NewsView'
import { ShopView } from '../view/navigationtabviews/shop/ShopView'
import { SettingsView } from '../view/authenticatedviews/SettingsView'


export const Routes = (props: { children: React.ReactChild }) => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const { children } = props

	const blockRoutIfAuthenticated = (allowedView: React.FC, notAllowedView: React.FC) => {
		return !authenticatedUser ? allowedView : notAllowedView
	}

	const authenticationRequired = (allowed: React.FC, notAllowed: React.FC) => {
		return authenticatedUser ? allowed : notAllowed
	}

	/* Detta gör vi för att användaren ska förbli inloggad */
	useEffect(() => {
		if (localStorage.getItem('user')){
			setAuthenticatedUser({ username: localStorage.getItem('user')})
		}
	}, [])

	return (
		<BrowserRouter>
			{children}
			<Switch>
				<Route exact path={RoutingPath.homeView} component={HomeView} />
				<Route exact path={RoutingPath.signInView} component={blockRoutIfAuthenticated(SignInView, HomeView)} />
				<Route exact path={RoutingPath.accessoriesView} component={AccessoriesView} />
				<Route exact path={RoutingPath.brandsView} component={BrandsView} />
				<Route exact path={RoutingPath.expertiseView} component={ExpertiseView} />
				<Route exact path={RoutingPath.newsView} component={NewsView} />
				<Route exact path={RoutingPath.shopView} component={ShopView} />
				<Route exact path={RoutingPath.settingsView} component={authenticationRequired(SettingsView, SignInView)} />
				<Route component={HomeView} />
			</Switch>
		</BrowserRouter>
	)
}
