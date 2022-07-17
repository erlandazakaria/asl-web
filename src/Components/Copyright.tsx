import Container from "@mui/material/Container/";
import Box from "@mui/material/Box";

export default function Copyright() {

  return (
      <Container maxWidth="lg" sx={{padding: "0px !important", width: "100%", height:"100%"}}>
        <Box 
          display="flex"
          p={2}
          sx={{
            width: "100% !important", 
            height: "100%", 
            justifyContent: "center",
            alignItems: "center",
            fontSize: 17,
            color: "white"
          }}>
            © 2022 PT. Angkasa Segara Logistik. All Rights Reserved.
        </Box>
      </Container>
  );
};
