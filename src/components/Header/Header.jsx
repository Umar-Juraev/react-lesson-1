import './Header.scss'

function Header(){


    const style ={
        padding: '25px',
        backgroundColor: 'red'
    }

    return(
        <div className=''  style={style}>
            <ul>
                <li><a href="">home</a></li>
                <li><a href="">destination</a></li>
                <li><a href="">crew</a></li>
                <li><a href="">technology</a></li>
            </ul>
        </div>
    )
}
export default Header



