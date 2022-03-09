import { Box } from "@mui/material";
import { Header } from "./component/Header";
import { Content } from "./component/Content";

function Survey() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Header />
      <Content />
    </Box>
  );
}

export default Survey;
