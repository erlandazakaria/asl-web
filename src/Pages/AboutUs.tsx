import Container from "@mui/material/Container/";
import Grid from "@mui/material/Grid";
import AboutUsContent from "../Components/AboutUsContent";
import VisionContent from "../Components/VisionContent";
import LogisticAndStrategicPlanning from "../Components/LogisticAndStrategicPlanning";
import { VisionImage } from "../Components/VisionImage";

export default function AboutUs() {
  return(
    <>
      <Container maxWidth={false} sx={{width: "100%", height: "100%", padding: "0px !important", zIndex: 2}}>
        <Grid width="100%" height="100%" sx={{backgroundColor: "#abd7e2"}}>
          <AboutUsContent />  
        </Grid>
      </Container>
      <Container maxWidth={false} sx={{width: "100%", height: "100%", padding: "0px !important", zIndex: 2}}>
        <Grid width="100%" height="100%" sx={{backgroundColor: "#e2f1fd"}}>
          <VisionContent />  
        </Grid>
      </Container>
      <Container maxWidth={false} sx={{width: "100%", height: "100%", padding: "0px !important", zIndex: 2}}>
        <Grid width="100%" height="100%" sx={{backgroundColor: "#000000", color: "#fff"}}>
          <VisionImage />
        </Grid>
      </Container>
      <Container maxWidth={false} sx={{width: "100%", height: "100%", padding: "0px !important", zIndex: 2}}>
        <Grid width="100%" height="100%" sx={{backgroundColor: "#e2f1fd"}}>
          <LogisticAndStrategicPlanning />  
        </Grid>
      </Container>
    </>
  );
}