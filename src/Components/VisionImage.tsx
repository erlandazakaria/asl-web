import { Container, Box} from '@mui/material';
import vision from '../Assets/vision2.png';
export function VisionImage () {
    return (
        <Container maxWidth="lg" sx={{padding: "0px !important", width: "100%", height:"100%", position: "relative"}}>
            <Box 
            display="flex"
            sx={{
                width: "100% !important", 
                height: "100%", 
                justifyContent: "center", 
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Box 
            component="img" 
            src={vision} 
            sx={{ width: "100%", height: {lg: "240px"}, objectFit: {lg: "cover", md: "contain", sm: "contain", xs: "contain"}}} 
          />
            </Box>
        </Container>
    )
}