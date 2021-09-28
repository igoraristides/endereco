import React, { useRef, useState } from "react";

import { Grid } from "@material-ui/core";
import FadeIn from "react-fade-in";

import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { Card, Title, Text, Content, Subtitle, TitlePage } from "./styles";
import api from "../../services/api";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

const PorId = () => {
  const formRef = useRef(null);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [end, setEnd] = useState({});

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);

      const ceps = await api.post("/endereco", formData);
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
      <TitlePage>Buscar Endereço por ID</TitlePage>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Input name="id" placeholder="" label="Digite o ID: " />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Content>
              <Button
                color="primary"
                type="submit"
                size="large"
                height={50}
                label="Buscar por Cidade"
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
              <Subtitle>Endereço</Subtitle>
            </Grid>
            <Grid item xs={4}>
              <Title>Rua</Title>
              <Text>{end.nome_tipo_logradouro}{end.nome_logradouro}</Text>
            </Grid>
            <Grid item xs={4}>
              <Title>Bairro</Title>
              <Text>{end.bairro}</Text>
            </Grid>
            <Grid item xs={4}>
              <Title>Cidade</Title>
              <Text>{end.cidade}</Text>
            </Grid>
            <Grid item xs={4}>
              <Title>UF</Title>
              <Text>{end.estado}</Text>
            </Grid>
          </Grid>
        </Card>
      )}
    </>
  );
};

export default PorId;
