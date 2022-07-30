import Container from "@mui/material/Container/";
import Box from "@mui/material/Box";

export default function ServiceHeadlights() {

  return (
      <Container maxWidth="lg" sx={{padding: "0px !important", width: "100%", height:"100%", position: "relative"}}>
        <Box position="absolute" width={350} height={85} sx={{backgroundColor: "#0b2e38", zIndex: 1}}></Box>
        <Box 
          display="flex"
          sx={{
            width: "100% !important", 
            height: "100%", 
            justifyContent: "center", 
            flexDirection: "column",
            alignItems: "center"
          }}>
          <Box m={4} sx={{zIndex: 2}}>
            <Box mb={4} sx={{fontSize: 31, color: "#e2f1fd"}}>
              Service Headlights
            </Box>
            <Box mt={4} sx={{fontSize: 23, color: "#e2f1fd", textAlign: "left", fontWeight: "500", mr: {xs: 2, md: 0}}}>
              <Box width="100%" height="100%" display="flex" justifyContent="space-evenly" sx={{flexDirection: {xs: "column", md: "row"}}}>
                <Box sx={{width: {xs: "100%", md: "50%"}}}>
                  <ul>
                    <li>Full-container-load (FCL)</li>
                    <li>Less-than-container-load (LCL)</li>
                    <li>Dry or liquid bulk shipments</li>
                    <li>Full or partial vessel charters</li>
                    <li>Physical cargo and paper-consolidation</li>
                    <li>Dangerous Goods Handling (DGR)</li>
                  </ul>
                </Box>
                <Box sx={{width: {xs: "100%", md: "50%"}}}>
                  <ul>
                    <li>Cargo Insurance</li>
                    <li>Certification and Legalisation of Documents</li>
                    <li>Food and Drug Registration & Administration Filing (FDA)</li>
                    <li>Prior Notice Filing (PNF)</li>
                    <li>Importer Security Filing (ISF)</li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
  );
};
