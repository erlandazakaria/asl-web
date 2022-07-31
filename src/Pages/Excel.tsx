import Container from "@mui/material/Container/";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function Excel() {

  return(
    <>
      <Container maxWidth={false} sx={{width: "100%", height: "720px", padding: "0px !important", zIndex: 2}}>
        <Grid width="100%" height="100%" sx={{backgroundColor: "#e2f1fd", textAlign: "center"}}>
          <Button sx={{mt: 5}} variant="contained" target="_blank" href={`${process.env.REACT_APP_SERVER_URL}/asl-message`}>
            Generate Excel
          </Button>
        </Grid>
      </Container>
    </>
  );
}
