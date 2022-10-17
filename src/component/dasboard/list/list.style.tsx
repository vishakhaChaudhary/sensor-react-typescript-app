/* import packages */
import { Button, ButtonProps, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export const OptionButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: 'darkgray',
  '&:hover': {
    backgroundColor: 'darkgray',
  },
}));

export const DetailButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: 'gray',
  '&:hover': {
    backgroundColor: 'gray',
  },
}));