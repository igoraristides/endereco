import { theme } from "../theme";

export const colors = {
  default: {
    color: "#E46B1E",
    border: "#E46B1E",
    background: "transparent",
  },
  primary: {
    color: "#fff",
    border: theme.colors.primary,
    background: theme.colors.primary,
  },
  secondary: {
    color: "#fff",
    border: theme.colors.secondary,
    background: theme.colors.secondary,
  },
  success: {
    color: "#fff",
    border: theme.colors.success,
    background: theme.colors.success,
  },
  danger: {
    color: "#fff",
    border: theme.colors.error,
    background: theme.colors.error,
  },
  back: {
    color: "#4D4D4E",
    border: "#F0F4FD",
    background: "#F0F4FD",
  },
};

export const sizes = {
  default: {
    fontSize: "100%",
    padding: "12px 25px",
    fontWeight: "bolder",
  },
  small: {
    fontSize: "85%",
    padding: "6px 15px",
    fontWeight: "normal",
  },
  large: {
    fontSize: "120%",
    padding: "14px 30px",
    fontWeight: "bolder",
  },
};

export default {
  borderRadius: "100px",
  margin: "0 5px 10px 0",
};
