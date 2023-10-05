import { useState } from "react";
import Navbar from "./components/Navbar";
import Sliderselect from "./components/Sliderselect";
import Tenureselect from "./components/Tenureselect";
import Results from "./components/Results";
import { Container, Grid } from "@mui/material";

function App() {
  const [counter, setcounter] = useState(0);

  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanterm: 5,
    interestRate: 5,
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Sliderselect data={data} setData={setData} />
            <Tenureselect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Results data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
