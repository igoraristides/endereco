import React, { useRef, useState } from "react";

import { Grid } from "@material-ui/core";
import FadeIn from "react-fade-in";
import { ReactComponent as Cidade } from "../../assets/icons/city.svg";
import { ReactComponent as ID } from "../../assets/icons/id.svg";
import { ReactComponent as CEP } from "../../assets/icons/postbox.svg";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import Form from "../../components/Form";
import logo from "../../assets/end.png";

import {
  Title,
  Links,
  Text,
  Buttons,
  ButtonContent,
  Content,
  Img,
  Logo,
} from "./styles";

const Registrar = () => {
  const history = useHistory();

  const goToC = (e) => {
    history.push("/cidade");
  };
  const goToI = (e) => {
    history.push("/id");
  };
  const goToCep = (e) => {
    history.push("/cep");
  };

  return (
    <>
      <FadeIn>
        <Img>
          <Logo src={logo} />
        </Img>
        <Buttons>
          <ButtonContent width="48">
            <Grid item xs={12}>
              <Content>
                <Button
                  onClick={goToCep}
                  color="primary"
                  type="button"
                  size="large"
                  label="Buscar por CEP"
                  Icon={CEP}
                  iconSize={28}
                  iconPosition="left"
                  fullWidth
                />
              </Content>
            </Grid>
          </ButtonContent>
          <ButtonContent width="48">
            <Grid item xs={12}>
              <Content>
                <Button
                  onClick={goToI}
                  color="primary"
                  type="button"
                  size="large"
                  label="Buscar por ID"
                  Icon={ID}
                  iconSize={28}
                  iconPosition="left"
                  fullWidth
                />
              </Content>
            </Grid>
          </ButtonContent>
          <ButtonContent>
            <Grid item xs={12}>
              <Content>
                <Button
                  onClick={goToC}
                  color="primary"
                  type="button"
                  size="large"
                  label="Buscar por Cidade"
                  Icon={Cidade}
                  iconSize={28}
                  iconPosition="left"
                  fullWidth
                />
              </Content>
            </Grid>
          </ButtonContent>
        </Buttons>
      </FadeIn>
    </>
  );
};

export default Registrar;
