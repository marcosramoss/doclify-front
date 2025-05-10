import { Link } from 'react-router-dom'
import logo from '../../assets/logo-doclify.svg'

const Footer = () => {    
   

    return (
        <>
            {location.pathname !== '/' ? null : <footer className="bg-black py-20">
                <div className='custon-container'>
                    <img src={logo} alt="Doclify logo" className='mb-8' />
                    <p className='text-white mb-8'>Doclify a plataforma que simplifica o levantamento de requisitos e a formalização de contratos em minutos.</p>

                    <hr className='bg-[#565656] h-0.5 mb-8' />

                    <div className='flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-4 mb-20'>
                        <ul className='text-white underline flex gap-4'>
                            <li><Link to=''>Termos de Serviço</Link></li>
                            <li><Link to=''>Configurações de Cookies</Link></li>
                        </ul>
                        <p className='text-white'>© 2025 Doclify. Todos os direitos reservados.</p>
                    </div>
                    <p className='text-center text-zinc-500 max-sm:text-start'>Desenvolvido por <Link to='https://essencialweb.dev' target='_blank' rel='noopener' className='font-bold hover:underline transition-all'>EssencialWeb</Link></p>
                </div>
            </footer>}
        </>
    )
}

export default Footer