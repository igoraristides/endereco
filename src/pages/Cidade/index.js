import React, { useRef, useState } from "react";

import { Grid } from "@material-ui/core";
import FadeIn from "react-fade-in";

import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { Card, Title, Text, Content, Subtitle, TitlePage } from "./styles";

const Cidade = () => {
  const formRef = useRef(null);
  const history = useHistory();

  const goTo = (e) => {};

  return (
    <>
      <TitlePage>Buscar cidade</TitlePage>
      <Form ref={formRef}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Input
              name="name"
              placeholder=""
              label="Digite a cidade desejada: "
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Content>
              <Button
                color="primary"
                type="button"
                size="large"
                height={50}
                label="Buscar Cidade"
                iconSize={28}
                iconPosition="left"
                fullWidth
              />
            </Content>
          </Grid>
        </Grid>
      </Form>
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Subtitle>Cidade buscada</Subtitle>
          </Grid>
          <Grid item xs={4}>
            <Title>Cidade</Title>
            <Text>123456</Text>
          </Grid>
          <Grid item xs={4}>
            <Title>UF</Title>
            <Text>aaaaaaaaaaa</Text>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Cidade;
