import { Box, Container } from '@mui/material';
export default function VisionContent () {

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
                    <Box px={4} mb={6} sx={{fontSize: 31, color: "white"}}>
                        Vision
                    </Box>
                    <Box m={4}>
                        <Box sx={{fontSize: 23, color: "#0b2e37", fontWeight: "500", textAlign: "justify", mr: {xs: 2, md: 0}}}>
                            There are two keys that hold major role in logistics world “Logistics Management and Strategic Planning” and PT. Angkasa Segara Logistik has already created system environment to conform with those two by Simplifying communication and services between multiple departments, help create a workflow blueprint that reduces costs by increasing visibility and improving the overall understanding of company needs.    
                        </Box>     
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}