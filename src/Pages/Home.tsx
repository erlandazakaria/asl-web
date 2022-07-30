import Container from "@mui/material/Container/";
import Grid from "@mui/material/Grid";
import Introduction from "../Components/Introduction";
import Picture from "../Components/Picture";
import Service from "../Components/Service";

export default function Home() {
  return(
    <>
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
    </>
  );
}
