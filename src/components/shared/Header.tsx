import { Link } from 'react-router-dom'
import logo from '../../assets/logo-doclify.svg'

const Header = () => {
    return (
        <header className='bg-black  sticky top-0 z-50 py-2'>
            <div className='custon-container flex items-center justify-between '>
                <Link to='/' ><img src={logo} alt="Doclify Logo" aria-label='Doclify Logo'/></Link>
                <nav>
                    <Link to='/painel' className='text-white py-2 px-4 bg-blue-600 hover:bg-blue-700 transition-all'>Começar</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header