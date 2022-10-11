import './Header.scss'

import { Link } from 'react-router-dom'

function Header() {

    return (
        <header className='header'>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/destination">destination</Link></li>
                <li><Link to="/crew">crew</Link></li>
                <li><Link to="/technology">technology</Link></li>
            </ul>
        </header>
    )
}
export default Header



