import './SideBar.css'

export const SideBar = (props: {drawerIsOpen: boolean, drawerHandler: (handler:boolean) => void}) => { /* kan även skriva Function istället för (handler:boolean)=> void */
  return (
    <div className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
      <button onClick={() => props.drawerHandler(false)}>Close SideBar</button>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </div>
  )
}
