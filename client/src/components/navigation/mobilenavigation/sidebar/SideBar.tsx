import { DesktopNavigationTabs } from '../../desktopnavigation/desktopnavigationtabs/DesktopNavigationTabs'
import './SideBar.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'

export const SideBar = (props: {drawerIsOpen: boolean, drawerHandler: (handler:boolean) => void}) => { /* kan även skriva Function istället för (handler:boolean)=> void */
  const history = useHistory()

   const handleRedirect = (selectedView: string) => {
      history.push(selectedView)
      props.drawerHandler(false)
  }
  
  
  return (
    <div className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
     { <button onClick={() => props.drawerHandler(false)}>Close SideBar</button>} 
      {/* <DesktopNavigationTabs/> */}
      <ul>
        <span onClick={() => handleRedirect(RoutingPath.homeView)}>Hem</span> <br/>
       <span onClick={() => handleRedirect(RoutingPath.accessoriesView)}>Accessories</span>
      </ul>
    </div>
  )
}
