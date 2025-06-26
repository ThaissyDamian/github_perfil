import { useState } from "react";                  

//mount - quando montado
//update - quando atualizado
//ummount - quando desmontado


import Perfil from "./components/Perfil/Index.jsx";
import Formulario from "./components/Formulario/index.jsx";
import ReposList from "./components/ReposList/index.jsx";

function App() {

  const [formularioEStaVisivel, setFormularioEstaVisivel] = useState(true); 
  const [nomeUsuario, setNomeUsuario] = useState('');

  return(
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

    {nomeUsuario.length > 4 && (
      <> 
      
        <Perfil nomeUsuario={nomeUsuario}/>
        <ReposList nomeUsuario={nomeUsuario} />

      </>
    )}
    
    {/* {formularioEStaVisivel && (

    <Formulario />
  )}

    <button onClick={() => setFormularioEstaVisivel(!formularioEStaVisivel)} type="button" >toggle form</button> */}

      
    </>
    
  )
}

export default App
