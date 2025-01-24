"use client";
import { useState } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import TipButtons from "./TipButtons";

// interface Props {
//   bill: number;
//   tip: number;
//   people: number;
// }

const TIP_PERCENTAGES = [10, 15, 20, 25, 30, 40];

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  //const [selectedTip, setSelectedTip] = useState(0);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    event.preventDefault();
    const value = (event.currentTarget.elements[0] as HTMLInputElement).value;
    setter(Number(value));
  };

  const calculateTip = () => {
    setTipPerPerson((bill * (tip / 100)) / people);
    setTotalPerPerson(bill / people + (bill * (tip / 100)) / people);
  };

  const handleReset = () => {
    setBill(0);
    setTip(0);
    setPeople(0);
    setTipPerPerson(0);
    setTotalPerPerson(0);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0f222d",
        border: "10px solid #000000",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        margin: "auto",
        padding: "2rem",
        marginTop: "2rem",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#2a3c47",
          color: "#ebe7d9",
          borderRadius: "0.5rem",
          width: "45%",
          height: "100%",
          marginLeft: "1rem",
        }}
      >
        {/* <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "2rem",
            marginBottom: "2rem",
          }}
        >
          Tip Calculator
        </Typography> */}
        <form
          onChange={(e) => handleSubmit(e, setBill)}
          style={{
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <Typography>Bill Amount</Typography>
          <TextField
            sx={{
              width: "100%",
              backgroundColor: "#ebe7d9",
              borderRadius: "0.5rem",
              color: "#000000",
            }}
            value={bill}
          />
        </form>

        <form
          onChange={(e) => handleSubmit(e, setPeople)}
          style={{
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <Typography>Number of People</Typography>
          <TextField
            sx={{
              width: "100%",
              backgroundColor: "#ebe7d9",
              borderRadius: "0.5rem",
              color: "#000000",
            }}
            value={people}
          />
        </form>
        <form
          style={{
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <Typography>Select Tip Amount: {tip}%</Typography>
          {TIP_PERCENTAGES.map((tip) => {
            return (
              <TipButtons
                key={tip}
                tip={tip}
                setTip={setTip}
                selectedTip={tip}
                calculateTip={calculateTip}
              />
            );
          })}
        </form>
      </Box>
      <Box
        sx={{
          backgroundColor: "#2a3c47",
          color: "#ebe7d9",
          borderRadius: "0.5rem",
          padding: "1rem",
          marginRight: "1rem",
          width: "45%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            margin: "0.5rem",
            padding: "0.5rem",
          }}
        >
          <Typography variant="h4">Tip Amount</Typography>
          <Typography>/ person</Typography>
          <Typography variant="h2">${tipPerPerson.toFixed(2)}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "0.5rem",
            padding: "0.5rem",
          }}
        >
          <Typography variant="h4">Total Amount</Typography>
          <Typography>/ person</Typography>
          <Typography variant="h2">${totalPerPerson.toFixed(2)}</Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0f222d",
            marginTop: "1rem",
            width: "100%",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
          onClick={() => {
            handleReset();
          }}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default TipCalculator;
