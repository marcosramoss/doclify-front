import docPicture from '../assets/no-docs.svg';
import add from '../assets/add.svg';
import sair from '../assets/sair.svg';


const Painel = () => {

  return (
    <main className="bg-blue-50">
      <div className="custon-container h-screen">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-4xl font-bold py-10">Projetos</h1>
          <div className="flex items-center gap-8 ">
            <button className='cursor-pointer p-2 bg-blue-200 border border-blue-400 hover:shadow-[0_0_0_4px_#ccdbf3] hover:bg-white rounded-sm transition-all'><img src={add} aria-label='Adicionar projeto' width={32} height={32}/></button>
            <button className='cursor-pointer p-2 bg-blue-200 border border-blue-400 hover:shadow-[0_0_0_4px_#ccdbf3] hover:bg-white rounded-sm transition-all'><img src={sair} aria-label='Sair' width={32} height={32}/></button>
          </div>
        </div>

        {/* Aqui eu vou fazer uma verificação se tiver projeto, mostra os projetos se não mostra essa div */}
        <div className="flex flex-col items-center justify-center  py-64 ">
          <img src={docPicture} alt="Doclify" className=" object-cover mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Crie seu primeiro projeto</h2>
          <p className="text-lg">Aqui você pode gerenciar suas informações.</p>
        </div>

      </div>
    </main>
  )
}

export default Painel