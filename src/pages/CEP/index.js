import React, { useRef, useState } from "react";

import { Grid } from "@material-ui/core";
import FadeIn from "react-fade-in";

import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { Card, Title, Text, Content, Subtitle, TitlePage } from "./styles";

const Cep = () => {
  const formRef = useRef(null);
  const history = useHistory();
  const [cep, setCep] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);

      const ceps = await api.post("/endereco/list", formData);
      setCep(ceps)
      toast.success("Endereços Encontrado..");


    } catch (error) {
      toast.error("Verifique o CEP informado.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <TitlePage>Buscar por CEP</TitlePage>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Input
              name="cep"
              placeholder=""
              label="Digite o CEP desejado: "
              mask="zipcode"
            />
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
      {cep ? (
        <Loader type="Bars" color="#A8D497" height={50} width={50} />
      ) : (
        <>
          <Card>
            {cep.map((end) => (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Subtitle>Lista de endereços</Subtitle>
                </Grid>
                <Grid item xs={4}>
                  <Title>Rua</Title>
                  <Text>{cep.nome_tipo_logradouro}{cep.nome_logradouro}</Text>
                </Grid>
                <Grid item xs={4}>
                  <Title>Número</Title>
                  <Text>{cep.nro_casa}</Text>
                </Grid>
                <Grid item xs={4}>
                  <Title>Bairro</Title>
                  <Text>{cep.bairro}</Text>
                </Grid>
                <Grid item xs={4}>
                  <Title>Cidade</Title>
                  <Text>{cep.cidade}</Text>
                </Grid>
                <Grid item xs={4}>
                  <Title>UF</Title>
                  <Text>{cep.estado}</Text>
                </Grid>
              </Grid>
            ))}
          </Card>
        </>
      )}

    </>
  );
};

export default Cep;
