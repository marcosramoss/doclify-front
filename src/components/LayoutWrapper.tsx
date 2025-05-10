import React, { useEffect } from 'react'
import Footer from './shared/Footer'
import { useLocation } from 'react-router-dom'
import Header from './shared/Header'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const caminhoAtual = useLocation().pathname
    const [mostrar, setMostrar] = React.useState(true)

    useEffect(() => {
        function mostrarFooter() {
            if (caminhoAtual === '/painel') {
                setMostrar(false)
                return mostrar
            } else if (caminhoAtual === '/') {
                setMostrar(true)
                return mostrar
            }
        }
        mostrarFooter()
    }, [mostrar, caminhoAtual])

    return (
        <>
            <Header />
            {children}
            {mostrar && <Footer />}
        </>
    )
}

export default LayoutWrapper