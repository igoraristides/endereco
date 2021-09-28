import React, { useRef, useState } from "react";

import { Grid } from "@material-ui/core";
import FadeIn from "react-fade-in";
import api from "../../services/api";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { Card, Title, Text, Content, Subtitle, TitlePage } from "./styles";

const Cidade = () => {
  const formRef = useRef(null);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [end, setEnd] = useState({});


  const handleSubmit = async (formData) => {
    try {
      setLoading(true);

      const ceps = await api.post("/endereco/list", formData);
      setEnd(ceps)
      toast.success("Endereço Encontrado..");


    } catch (error) {
      toast.error("Verifique o CEP informado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TitlePage>Buscar cidade</TitlePage>
      <Form ref={formRef}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Input
              name="id"
              placeholder=""
              label="Digite a cidade desejada: "
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Content>
              <Button
                color="primary"
                type="submit"
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
      {end ? (
        <Loader type="Bars" color="#A8D497" height={50} width={50} />
      ) : (
        <Card>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Subtitle>Cidade buscada</Subtitle>
            </Grid>
            <Grid item xs={4}>
              <Title>Cidade</Title>
              <Text>{end.cidade}</Text>
            </Grid>
            <Grid item xs={4}>
              <Title>UF</Title>
              <Text>{end.estado}</Text>
            </Grid>
            <Grid item xs={4}>
              <Title>Sigla</Title>
              <Text>{end.sigla_estado}</Text>
            </Grid>
            <Grid item xs={4}>
              <Title>País</Title>
              <Text>{end.nome_pais}</Text>
            </Grid>
          </Grid>
        </Card>
      )}
    </>

  );
};

export default Cidade;
