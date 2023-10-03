import Navbar from "./components/Navbar";
import Sliderselect from "./components/Sliderselect";
import Tenureselect from "./components/Tenureselect";
import Results from "./components/Results";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Sliderselect />
            <Tenureselect />
          </Grid>
          <Grid item xs={12} md={6}>
            <Results />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
