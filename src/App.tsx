import Container from "@mui/material/Container/";
import Grid from "@mui/material/Grid";
import Copyright from "./Components/Copyright";
import Footer from "./Components/Footer";

import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import Picture from "./Components/Picture";
import Service from "./Components/Service";

function App() {
  return (
    <>
    <Container maxWidth={false} sx={{width: "100%", height: "130px", padding: "0px !important"}}>
      <Grid width="100%" height="100%" borderBottom="4px solid #13596c" sx={{backgroundColor: "#e2f1fd"}}>
        <Header />
      </Grid>
    </Container>
    <Container maxWidth={false} sx={{width: "100%", height: "520px", padding: "0px !important", zIndex: 2}}>
      <Grid width="100%" height="100%" sx={{backgroundColor: "#e2f1fd"}}>
        <Picture />
      </Grid>
    </Container>
    <Container maxWidth={false} sx={{width: "100%", height: "auto", padding: "0px !important", overflow: "hidden"}}>
      <Grid width="100%" height="100%" sx={{backgroundColor: "#13596c"}}>
        <Introduction />
      </Grid>
    </Container>
    <Container maxWidth={false} sx={{width: "100%", height: "auto", padding: "0px !important", overflow: "hidden"}}>
      <Grid width="100%" height="100%" sx={{backgroundColor: "#e2f1fd"}}>
        <Service />
      </Grid>
    </Container>
    <Container maxWidth={false} sx={{width: "100%", height: "auto", padding: "0px !important", overflow: "hidden"}}>
      <Grid width="100%" height="100%" sx={{backgroundColor: "#e5e5e5"}}>
        <Footer />
      </Grid>
    </Container>
    <Container maxWidth={false} sx={{width: "100%", height: "auto", padding: "0px !important", overflow: "hidden"}}>
      <Grid width="100%" height="100%" sx={{backgroundColor: "#9b1b1e"}}>
        <Copyright />
      </Grid>
    </Container>
    </>
  );
}

export default App;
