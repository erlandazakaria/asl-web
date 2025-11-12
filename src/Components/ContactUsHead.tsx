import { useState } from "react";
import axios from "axios";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ContactUsHead() {

  return (
      <Container maxWidth="lg" sx={{padding: "0px !important", width: "100%", height:"100%", position: "relative"}}>
        <form action="https://api.web3forms.com/submit" method="POST">
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
            <input type="hidden" name="access_key" value="69f8a533-d1b0-49b5-b17d-ffed6b9a401b" />
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
                    name="name"
                    size="small" 
                    required
                  />
                </Box>
                <Box>Your Email*</Box>
                <Box my={1} sx={{pr: {xs: 8, md: 20}}}>
                  <TextField 
                    sx={{backgroundColor: "white"}} 
                    fullWidth={true}
                    name="email"
                    size="small" 
                    required
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
                      name="message"
                      size="small"
                      multiline={true}
                      minRows={10}
                    />
                  </Box>
                  <Box my={1} sx={{pr: {xs: 8, md: 20}}} textAlign="right">
                    <Button
                      sx={{width: 120, backgroundColor: "#d5820c"}}
                      variant="contained"
                      type="submit"
                    >Submit</Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        </form>
      </Container>
  );
};
