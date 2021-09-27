import React, { useState } from "react";

import { Grid } from "@material-ui/core";

import Input from "../../Input";
import RadioGroup from "../../Input/RadioGroup";

import { Section } from "./styles";
import Select from "../../Input/Select";

const DadosJuridicos = ({ step }) => {
  const [tipo, setTipo] = useState("");

  return (
    <Section active={`${step === 0 ? "active" : ""}`}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input
            name="Nome"
            label="Nome"
            placeholder="Nome"
            variant="border"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            name="doc"
            label="CNPJ"
            placeholder="CNPJ"
            mask="cnpj"
            variant="border"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            name="nomeSocial"
            label="Nome Social"
            placeholder=""
            variant="border"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Select
            name="atividadescomerciais"
            label="Atividades comerciais"
            fullWidth
            loadOptions
            options={[
              { label: "Selecione", value: "" },
              { label: "Comércio Atacadista", value: "m" },
              { label: "Comércio Varejista", value: "f" },
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            name="telefone"
            label="Telefone"
            placeholder="Ex.: 45 35999999"
            variant="border"
            mask="phone"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            name="celular"
            label="Celular"
            placeholder="Ex.: 45 999999999"
            mask="cell"
            variant="border"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Input name="email" label="E-mail" variant="border" fullWidth />
        </Grid>
      </Grid>
    </Section>
  );
};

export default DadosJuridicos;
