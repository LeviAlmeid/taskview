
import { Agendas } from './Pages/Agendas';
import { Home } from "./Pages/Home";
import { BrowserRouter} from "react-router-dom";
import { Route } from 'react-router-dom';
import { Header } from './components/Header';
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

import "./styles/global.scss";

Modal.setAppElement("#root");
export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)

  }


  return (
    <>
    <Header  onOpenNewTransactionModal={handleOpenNewTransactionModal} />
    <BrowserRouter>   
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Agendas">
            <Agendas />
          </Route>
    </BrowserRouter>


    <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}

