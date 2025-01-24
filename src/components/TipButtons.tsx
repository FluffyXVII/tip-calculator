import { Button } from "@mui/material";
import { Typography } from "@mui/material";

interface Props {
  tip: number;
  setTip: (value: number) => void;
  calculateTip: () => void;
  selectedTip: number;
}
const TipButtons = ({ tip, setTip, calculateTip, selectedTip }: Props) => {
  return (
    <Button
      onClick={() => {
        setTip(tip);
        calculateTip();
      }}
      sx={{
        backgroundColor: selectedTip === tip ? "#0f222d" : "#ebe7d9",
        color: selectedTip === tip ? "#ebe7d9" : "#0f222d",
        borderRadius: "0.5rem",
        fontWeight: "800",
        fontSize: "1.2rem",
        padding: "0.5rem 4rem",
        margin: "0.5rem",
        marginLeft: "1rem",
        width: "25%",
        "&:hover": {
          backgroundColor: "#ebe7d9",
          color: "#0f222d",
        },
      }}
    >
      <Typography>{tip}%</Typography>
    </Button>
  );
};

export default TipButtons;
