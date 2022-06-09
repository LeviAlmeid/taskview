
import { Agendas } from './Pages/Agendas';
import { Home } from "./Pages/Home";
import { BrowserRouter} from "react-router-dom";
import { Route } from 'react-router-dom';

import "./styles/global.scss";
export function App() {
  return (
    <BrowserRouter>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Agendas">
            <Agendas />
          </Route>
    </BrowserRouter>
  );
}

