import './HamburgerButton.css'

export const HamburgerButton = (props: {drawerHandler: (handler:boolean) => void}) => { /* Arasto skrev Function istället för (handler:boolean)=>void */
  return (
    <button className='toggle-button' onClick={() => props.drawerHandler(true)}>
      <div className='toggle-button_line'></div>
      <div className='toggle-button_line'></div>
      <div className='toggle-button_line'></div>
    </button>
  )
}
