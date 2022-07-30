import Container from "@mui/material/Container/";
import Box from "@mui/material/Box";

import CustomerBenefitsBackground from "../Assets/service-customer-benefits.png";

export default function CustomerBenefits() {

  return (
      <Container maxWidth="lg" sx={{padding: "0px !important", width: "100%", height:"100%", position: "relative"}}>
        <Box position="absolute" width={350} height={85} sx={{backgroundColor: "#0b2e38", zIndex: 1}}></Box>
        <Box position="absolute" sx={{right: {xs: -300, md: -100, lg: -200, xl: -400}}} top={-60} zIndex={0} >
          <img src={CustomerBenefitsBackground} alt="customer-benefit-background" />
        </Box>
        <Box 
          display="flex"
          sx={{
            width: {xs: "100% !important", md: "50% !important"}, 
            height: "100%", 
            justifyContent: "flex-start", 
            flexDirection: "column",
            alignItems: "center"
          }}>
          <Box m={4} sx={{zIndex: 2}}>
            <Box mb={4} sx={{fontSize: 31, color: "#e2f1fd"}}>
              Customer Benefits
            </Box>
            <Box mt={4} sx={{fontSize: 23, color: "#0b2e38", textAlign: "left", fontWeight: "500"}}>
              <Box width="100%" height="100%" display="flex" flexDirection="row">
                <Box width="100%">
                  <ul>
                    <li>Full-container-load (FCL)</li>
                    <li>Less-than-container-load (LCL)</li>
                    <li>Dry or liquid bulk shipments</li>
                    <li>Full or partial vessel charters</li>
                    <li>Physical cargo and paper-consolidation</li>
                    <li>Dangerous Goods Handling (DGR)</li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
  );
};
