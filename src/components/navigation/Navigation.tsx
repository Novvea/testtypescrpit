import './Navigation.css'
import { useWindowDimensions } from '../hooks/useWindowDimensions'
import { DesktopNavigation } from './desktopnavigation/DesktopNavigation'
import { MobileNavigation } from './mobilenavigation/MobileNavigation'

export const Navigation = () => {
	const { height, width } = useWindowDimensions()

	const displayNavigationDependingOnDevice = () => {
		return (width <= 1000)
			? <MobileNavigation/>
			: <DesktopNavigation/>
	}


	return (
		<div>
			{displayNavigationDependingOnDevice()}
		</div>
	)
}
