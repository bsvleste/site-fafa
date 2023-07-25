import { BrowserRouter, Link } from 'react-router-dom'
import { Routes } from './routes'
import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react'
import LogoFafa from './assets/logoFafa.png'
export function App() {
  return (
    <BrowserRouter>
      <div className="mx-3  sm:mx-auto ">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full sm:w-[80rem]  ">
            <div className="h-48 bg-white mb-2 flex justify-center items-center flex-col rounded-b-lg">
              <img
                src={LogoFafa}
                alt="desenho de botões, agulha de croche e um texto fafa croche"
                className="w-48 h-48"
              />
              <div className="flex justify-around items-center w-48  mb-4">
                <Link to="/">Bolsas</Link>
                <Link to="/contato">Contato</Link>
              </div>
            </div>
            <Routes />
            <div className="h-28 bg-white mb-2 rounded-lg flex justify-center items-center gap-12">
              <InstagramLogo size={32} />
              <FacebookLogo size={32} />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
