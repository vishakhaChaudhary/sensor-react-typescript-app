/* import packages */
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ListItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  boxShadow: 'none'
}));

export const Text = styled('div')((theme) => ({
   fontSize: '0.6rem'
}));