import React, { useCallback } from "react";

import { Grid } from "@material-ui/core";
import Axios from "axios";

import Input from "../../Input";

import { Section } from "../DadosPessoais/styles";

const Endereco = ({ step, formRef }) => {
  return (
    <Section active={`${step === 1 ? "active" : ""}`}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input
            name="cep"
            label="CEP"
            placeholder="0000000"
            variant="border"
            fullWidth
            mask="zipcode"
          />
        </Grid>
        <Grid item xs={8}>
          <Input name="rua" label="Rua" variant="border" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <Input name="numero" label="Número" variant="border" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Input name="bairro" label="Bairro" variant="border" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Input
            name="complemento"
            label="Complemento"
            placeholder=""
            variant="border"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            name="cidade"
            label="Cidade"
            placeholder=""
            variant="border"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            name="estado"
            label="Estado"
            placeholder=""
            variant="border"
            fullWidth
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default Endereco;
