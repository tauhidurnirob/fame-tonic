import { Button } from "@mui/material";
import { FC } from "react";
import { ArrowIcon } from "@/assets/icons/Arrow";

interface IProps {
  text: string;
}
const CustomButton: FC<IProps> = ({ text }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{
        fontSize: "20px",
        fontWeight: 700,
        borderRadius: "8px",
        boxShadow: "2px 2px 10px 0px #00E7F9"
      }}
      fullWidth
      endIcon={<ArrowIcon sx={{ fontSize: "16px !important" }} />}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
