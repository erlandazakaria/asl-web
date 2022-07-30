import Container from "@mui/material/Container/";
import Box from "@mui/material/Box";

import BackgroundBawah from "../Assets/background-bawah.png";

export default function ServiceHead() {

  return (
      <Container maxWidth="lg" sx={{padding: "0px !important", width: "100%", height:"100%", position: "relative"}}>
        <Box position="absolute" width={350} height={85} sx={{backgroundColor: "#0b2e38", zIndex: 1}}></Box>
        <Box position="absolute" right={-400} top={-150} zIndex={0} >
          <img src={BackgroundBawah} alt="bot-background" />
        </Box>
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
            <Box mb={4} sx={{fontSize: 31, color: "white"}}>
              Service
            </Box>
            <Box mt={4} sx={{fontSize: 23, color: "#0b2e37", textAlign: "justify", fontWeight: "500", mr: {xs: 2, md: 0}}}>
            PT. Angkasa Segara Logistik understands customer service satisfaction has 
            become a basis on which companies drive business growth and profitability. 
            Reduce shipping costs and ensure timely delivery of goods are integral parts 
            of a solid logistics management system, emphasizing the importance of 
            warehousing and transportation for customer service excellence for end-user 
            product delivery. From the same spirits and motivation we provide our 
            customers the following services:
            </Box>
          </Box>
        </Box>
      </Container>
  );
};
