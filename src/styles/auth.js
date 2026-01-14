import { colors, radius, font } from "./theme";

export const wrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: `linear-gradient(135deg, ${colors.bgMain}, #1A1A40, #2C2C5E)`,
  fontFamily: font.main,
};

export const card = {
  background: colors.bgSoft,
  padding: "40px 30px",
  borderRadius: radius.lg,
  boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
  width: "100%",
  maxWidth: "400px",
  textAlign: "center",
};

export const title = {
  marginBottom: "30px",
  color: colors.secondary,
  fontSize: "28px",
  fontWeight: "700",
};
