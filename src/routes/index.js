import React from "react";

import { BrowserRouter, Switch } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import CEP from "../pages/CEP";
import PorId from "../pages/ID";
import Registrar from "../pages/EscolherEnd";
import Cidade from "../pages/Cidade";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" component={Registrar} exact />
        <PublicRoute path="/cep" component={CEP} />
        <PublicRoute path="/id" component={PorId} />
        <PublicRoute path="/cidade" component={Cidade} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
