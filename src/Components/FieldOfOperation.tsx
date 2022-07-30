import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import BackgroundBawah from "../Assets/background-bawah.png";
import International from "../Assets/international.png";
import InlandTrucking from "../Assets/inland-trucking.png";
import Warehousing from "../Assets/warehousing.png";
import Distribution from "../Assets/distribution.png";
import Customs from "../Assets/customs.png";
import DoorToDoor from "../Assets/door-to-door.png";
import Tug from "../Assets/tug.png";
import InlandService from "../Assets/inland-service.png";
import Intercity from "../Assets/intercity.png";

export default function FieldOfOperation() {

  return (
      <Container maxWidth="lg" sx={{padding: "0px !important", width: "100%", height:"100%", position: "relative"}}>
        <Box position="absolute" width={350} height={85} sx={{backgroundColor: "#0b2e38", zIndex: 1}}></Box>
        <Box 
          display="flex"
          sx={{
            width: "100% !important", 
            height: "100%", 
            flexDirection: "column",
          }}>
          <Box m={4} sx={{zIndex: 2}}>
            <Box mb={4} sx={{fontSize: 31, color: "white", textAlign: "left"}}>
              Field Of Operation
            </Box>
          </Box>
          <Grid container spacing={3} sx={{fontWeight: "500"}}>
            <Grid item xs={12} md={6} lg={4} sx={{padding: "0px !important"}} justifyItems="center">
              <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width={300} textAlign="center">
                  <img src={International} width={300} height={200} style={{objectFit: "cover", borderRadius: 30}} alt="International Sea and Air Freight Forwarding" />
                  <Box height={60} mt={1} mb={1}>International Sea and Air Freight Forwarding</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{padding: "0px !important"}} justifyItems="center">
              <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width={300} textAlign="center">
                  <img src={InlandTrucking} width={300} height={200} style={{objectFit: "cover", borderRadius: 30}} alt="Inland Trucking" />
                  <Box height={60} mt={1} mb={1}>Inland Trucking</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{padding: "0px !important"}} justifyItems="center">
              <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width={300} textAlign="center">
                  <img src={Warehousing} width={300} height={200} style={{objectFit: "cover", borderRadius: 30}} alt="Warehousing and Customs Clearance" />
                  <Box height={60} mt={1} mb={1}>Warehousing and Customs Clearance</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{padding: "0px !important"}} justifyItems="center">
              <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width={300} textAlign="center" mb={2}>
                  <img src={Distribution} width={300} height={200} style={{objectFit: "cover", borderRadius: 30}} alt="Distribution" />
                  <Box height={60} mt={1} mb={1}>Distribution</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{padding: "0px !important"}} justifyItems="center">
              <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width={300} textAlign="center" mb={2}>
                  <img src={Customs} width={300} height={200} style={{objectFit: "cover", borderRadius: 30}} alt="Customs Brokerage" />
                  <Box height={60} mt={1} mb={1}>Customs Brokerage</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{padding: "0px !important"}} justifyItems="center">
              <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width={300} textAlign="center" mb={2}>
                  <img src={DoorToDoor} width={300} height={200} style={{objectFit: "cover", borderRadius: 30}} alt="Door to Door Service" />
                  <Box height={60} mt={1} mb={1}>Door to Door Service</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{padding: "0px !important"}} justifyItems="center">
              <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width={300} textAlign="center" mb={2}>
                  <img src={Tug} width={300} height={200} style={{objectFit: "cover", borderRadius: 30}} alt="Tug and Barge Operation" />
                  <Box height={60} mt={1} mb={1}>Tug and Barge Operation</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{padding: "0px !important"}} justifyItems="center">
              <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width={300} textAlign="center" mb={2}>
                  <img src={InlandService} width={300} height={200} style={{objectFit: "cover", borderRadius: 30}} alt="Inland Service" />
                  <Box height={60} mt={1} mb={1}>Inland Service</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{padding: "0px !important"}} justifyItems="center">
              <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width={300} textAlign="center" mb={2}>
                  <img src={Intercity} width={300} height={200} style={{objectFit: "cover", borderRadius: 30}} alt="Intercity Railways Transport" />
                  <Box height={60} mt={1} mb={1}>Intercity Railways Transport</Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
  );
};
