import { useState } from "react";

import Container from "@mui/material/Container/";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ContactUsHead() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    console.log("name", name);
    console.log("email", email);
    console.log("message", message);
  }

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
          <Box m={4} sx={{zIndex: 2}} width="100%">
            <Box px={2} mb={6} sx={{fontSize: 31, color: "white"}}>
              Contact Us
            </Box>
            <Box 
              px={4} 
              width="100%" 
              display="flex" 
              mt={4} 
              sx={{fontSize: 23, color: "#0b2e37", fontWeight: "500", flexDirection: {xs: "column", md: "row"}, justifyContent: {xs: "flex-start", md: "space-evenly"}}}
            >
              <Box sx={{width: {xs: "100%", md: "50%"}}} display="flex" flexDirection="column">
                <Box>Your Name*</Box>
                <Box my={1} sx={{pr: {xs: 8, md: 20}}}>
                  <TextField 
                    sx={{backgroundColor: "white"}}
                    fullWidth={true}
                    size="small" 
                    onChange={(e) => setName(e.target.value)}
                  />
                </Box>
                <Box>Your Email*</Box>
                <Box my={1} sx={{pr: {xs: 8, md: 20}}}>
                  <TextField 
                    sx={{backgroundColor: "white"}} 
                    fullWidth={true}
                    size="small" 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                </Box>
              </Box>
              <Box sx={{width: {xs: "100%", md: "50%"}, mt: {xs: 2, md: 0}}}>
                <Box display="flex" flexDirection="column">
                  <Box>Your Message</Box>
                  <Box my={1} sx={{pr: {xs: 8, md: 20}}}>
                    <TextField 
                      sx={{backgroundColor: "white"}} 
                      fullWidth={true}
                      size="small" 
                      onChange={(e) => setMessage(e.target.value)}
                      multiline={true}
                      minRows={10}
                    />
                  </Box>
                  <Box my={1} sx={{pr: {xs: 8, md: 20}}} textAlign="right">
                    <Button
                      sx={{width: 120, backgroundColor: "#d5820c"}}
                      variant="contained"
                      onClick={onSubmit}
                    >Submit</Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
  );
};
