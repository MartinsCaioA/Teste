import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cabecalho from '../components/Cabecalho'
import Inicio from '../Inicio'

export default function NaoAutenticados(){
    return(
        <BrowserRouter>
        <Cabecalho />
        <Routes>
            <Route path='/' element= {<Inicio />} />

            <Route path='*' element= {<Inicio />} />
        </Routes>
        </BrowserRouter>
    )
}
