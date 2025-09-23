import './navigator.styles.scss';

function Navigator() {
    return (
         <nav className="navigator"> 
            <div className='logo'>Logo</div>
            <ul className='other-navs'>
                <li> Shop </li>
                <li> Login </li>
                <li> Cart </li>
            </ul>
         </nav>
    )
}

export default Navigator;