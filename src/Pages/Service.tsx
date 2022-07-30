import Container from "@mui/material/Container/";
import Grid from "@mui/material/Grid";
import CustomerBenefits from "../Components/CustomerBenefits";

import FieldOfOperation from "../Components/FieldOfOperation";
import ServiceHead from "../Components/ServiceHead";
import ServiceHeadlights from "../Components/ServiceHeadlights";

export default function Service() {
  return(
    <>
      <Container maxWidth={false} sx={{width: "100%", height: "auto", padding: "0px !important", zIndex: 2, overflow: "hidden"}}>
        <Grid width="100%" height="100%" sx={{backgroundColor: "#abd7e2"}}>
          <ServiceHead />
        </Grid>
      </Container>
      <Container maxWidth={false} sx={{width: "100%", height: "auto", padding: "0px !important", overflow: "hidden"}}>
        <Grid width="100%" height="100%" sx={{backgroundColor: "#e2f1fd"}}>
          <FieldOfOperation />
        </Grid>
      </Container>
      <Container maxWidth={false} sx={{width: "100%", height: "auto", padding: "0px !important", overflow: "hidden"}}>
        <Grid width="100%" height="100%" sx={{backgroundColor: "#13596c"}}>
          <ServiceHeadlights />
        </Grid>
      </Container>
      <Container maxWidth={false} sx={{width: "100%", height: "auto", padding: "0px !important", overflow: "hidden"}}>
        <Grid width="100%" height="100%" sx={{backgroundColor: "#afb1b3"}}>
          <CustomerBenefits />
        </Grid>
      </Container>
    </>
  );
}
