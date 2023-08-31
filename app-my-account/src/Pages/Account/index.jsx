import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "app_finances_root/Components";
import { Container, Box, Stack, Typography, Button, Grid, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { setNavigationCookies } from "../../Utils";
import Cookies from "js-cookie";

export default function Account(props) {
  const [value, setValue] = useState(0);
  const { watch, handleSubmit, control } = useForm();
  const watchFields = watch();

  function submitForm(data) {
    console.log(data);
  }

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <Box
      sx={{
        backgroundColor: "#ff6c24",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Box
          sx={{
            // maxWidth: 800,
            margin: "0 auto",
            backgroundColor: "#fff",
            // borderRadius: 5,
            height: "100%",
            minHeight: "100vh",
            paddingTop: 15,
          }}
        >
          <Grid container spacing={2}>
            <Grid item lg={4}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                <Tab label="Meus dados" {...a11yProps(0)} />
                <Tab label="Convidar pessoas" {...a11yProps(0)} />
                <Tab label="Upgrade de plano" {...a11yProps(1)} />
                <Tab label="Encerrar minha conta" {...a11yProps(2)} />
                <Tab label="Sair" {...a11yProps(2)} />
                {/* <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} /> */}
              </Tabs>
            </Grid>
            <Grid item lg={6}>
              <TabPanel value={value} index={0}>
                <Box>
                  <Typography mb={5} variant="h1" fontSize={20} fontWeight="bold">
                    Minha conta
                  </Typography>
                  <form onSubmit={handleSubmit(submitForm)}>
                    <Box mb={2}>
                      <Controller
                        control={control}
                        defaultValue=""
                        name="name"
                        render={({ field: { onChange, value, name } }) => (
                          <Input label="Nome" name={name} value={value} onChange={onChange} />
                        )}
                      />
                    </Box>
                    <Box mb={2}>
                      <Controller
                        control={control}
                        defaultValue=""
                        name="email"
                        render={({ field: { onChange, value, name } }) => (
                          <Input label="E-mail" name={name} value={value} onChange={onChange} />
                        )}
                      />
                    </Box>
                    <Box mb={2}>
                      <Controller
                        control={control}
                        defaultValue=""
                        name="password"
                        render={({ field: { onChange, value, name } }) => (
                          <Input label="Senha" name={name} value={value} onChange={onChange} />
                        )}
                      />
                    </Box>
                    <Box>
                      <Controller
                        control={control}
                        defaultValue=""
                        name="confirm_password"
                        render={({ field: { onChange, value, name } }) => (
                          <Input label="Confirme sua senha" name={name} value={value} onChange={onChange} />
                        )}
                      />
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        margin: 5,
                      }}
                    >
                      <Button
                        type="submit"
                        style={{
                          backgroundColor: "#ff6c24",
                          color: "#fff",
                          padding: 10,
                          width: "150px",
                          fontWeight: 600,
                        }}
                      >
                        Salvar
                      </Button>
                    </Box>
                  </form>
                  {/* <Box
                    textAlign="center"
                    sx={{
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => navigate("/")}
                  >
                    
                  </Box> */}
                </Box>
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Encerrar minha conta
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Box>
                  <Typography>Tem certeza que deseja sair?</Typography>
                  <Button
                    onClick={() => {
                      Cookies.remove("app_myfinances");
                      setNavigationCookies("/");
                    }}
                    style={{
                      backgroundColor: "#ff6c24",
                      color: "#fff",
                      padding: 10,
                      width: "150px",
                      fontWeight: 600,
                    }}
                  >
                    Sim
                  </Button>
                </Box>
              </TabPanel>
              {/* <TabPanel value={value} index={4}>
                Item Five
              </TabPanel>
              <TabPanel value={value} index={5}>
                Item Six
              </TabPanel>
              <TabPanel value={value} index={6}>
                Item Seven
              </TabPanel> */}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
