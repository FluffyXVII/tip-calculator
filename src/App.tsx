import { Container } from "@mui/material";
import "./App.css";
import TipCalculator from "./components/TipCalculator";

function App() {
  return (
    <Container maxWidth="md" sx={{ marginTop: "20vh auto", minWidth: "800px" }}>
      <TipCalculator />
    </Container>
  );
}

export default App;
