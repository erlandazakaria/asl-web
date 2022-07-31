import { Routes, Route, Navigate } from "react-router-dom";
import Container from "@mui/material/Container/";
import Grid from "@mui/material/Grid";

import { useToast } from "./Contexts/Toast";

import Home from "./Pages/Home";
import Service from "./Pages/Service";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Excel from "./Pages/Excel";

import Toast from "./Components/Toast";
import Header from "./Components/Header";
import Copyright from "./Components/Copyright";
import Footer from "./Components/Footer";

function App() {
  const { toast, closeToast } = useToast();

  return (
    <>
    <Toast isOpen={toast.isOpen} onClose={closeToast} message={toast.message} />
    <Container maxWidth={false} sx={{width: "100%", height: "130px", padding: "0px !important"}}>
      <Grid width="100%" height="100%" borderBottom="4px solid #13596c" sx={{backgroundColor: "#e2f1fd"}}>
        <Header />
      </Grid>
    </Container>
    
    {/* CONTENT */}
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Routes>
      <Route path="/service" element={<Service />} />
    </Routes>
    <Routes>
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
    <Routes>
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
    <Routes>
      <Route path="/excel" element={<Excel />} />
    </Routes>
    <Routes>
      <Route element={<Navigate to="/" />} />
    </Routes>

    <Container maxWidth={false} sx={{width: "100%", height: "auto", padding: "0px !important", overflow: "hidden"}}>
      <Grid width="100%" height="100%" sx={{backgroundColor: "#e5e5e5"}}>
        <Footer />
      </Grid>
    </Container>
    <Container maxWidth={false} sx={{width: "100%", height: "auto", padding: "0px !important", overflow: "hidden"}}>
      <Grid width="100%" height="100%" sx={{backgroundColor: "#9b1b1e"}}>
        <Copyright />
      </Grid>
    </Container>
    </>
  );
}

export default App;
