import Container from "@mui/material/Container/";
import Grid from "@mui/material/Grid";

import ContactUsHead from "../Components/ContactUsHead";
import Map from "../Components/Map";

export default function ContactUs() {
  return(
    <>
      <Container maxWidth={false} sx={{width: "100%", height: "auto", padding: "0px !important", zIndex: 2}}>
        <Grid width="100%" height="100%" sx={{backgroundColor: "#abd7e2"}}>
          <ContactUsHead />
        </Grid>
      </Container>
      <Container maxWidth={false} sx={{width: "100%", height: "auto", padding: "0px !important", zIndex: 2}}>
        <Grid width="100%" height="100%" sx={{backgroundColor: "#e2f1fd"}}>
          <Map />
        </Grid>
      </Container>
    </>
  );
}
