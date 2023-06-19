import { useTheme } from "@mui/material/styles";
export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return <img src="/assets/logos/Logo.png" alt="logo" height={"24px"} width={"24px"} />;
};
