import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { postLogin } from "../../services/login.service";
import { Params } from "../../types/login.type";
import { IJsonPadrao } from "../../types/jsonPadrao.type";
import { CampoTexto, Container, ComponentsDiv, Botao } from "./styles";

function Login() {
  const navigate = useNavigate();

  let loginPadrao = "admin";
  let senhaPadrao = "admin";

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const config: Params = {
    baseUrl: "http://grupodm3.ddns.net:8049/webrunstudio/webRest.rule",
    headers: {
      Authorization: "",
    },
    method: "post",
  };

  const handleSubmit = () => {
    let data: IJsonPadrao = {
      appTipo: "DM3",
      token: 99999,
      acao: 5,
      modelo: "MOBILE",
      servico: "LOGAR",
      usuario: login,
      senha: senha,
      serial: ":",
      chave: "FBBC14E0-1B90-44DD-98E1-94D678A68451",
      operationSystem: "WIN",
      tipoArquivo: "JPG",
      versao: 3081,
    };
    console.log(postLogin(config, data));
    if (login === loginPadrao && senha === senhaPadrao) {
      navigate("/home");
    } else {
      alert("Login ou Senha incorretos");
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://static.vecteezy.com/ti/vetor-gratis/p3/3586986-3d-abstract-background-blue-ocean-and-cloud-wallpaper-flat-gradient-color-vector-illustration-gratis-vetor.jpg)",
        height: "100vh",
      }}
    >
      <Container>
        <ComponentsDiv>
          <Grid container spacing="10px" columns={1}>
            <Grid item xs={1}>
              <CampoTexto
                label="Login"
                variant="outlined"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={1}>
              <CampoTexto
                label="Senha"
                variant="outlined"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={1}>
              <Botao
                variant="contained"
                onClick={handleSubmit}
                sx={{ width: "100%" }}
              >
                Logar
              </Botao>
            </Grid>
          </Grid>
        </ComponentsDiv>
      </Container>
    </div>
  );
}

export default Login;
