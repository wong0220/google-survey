import { Box } from "@mui/material";
import { HeaderView } from "./component/preview/HeaderView";
import { useSelector } from "react-redux";
import { ContentView } from "./component/preview/ContentView";

export function Preview() {
  const mltplChcOp = useSelector((state) => state.content.mltplChcOp);
  const numberOfAnswers = Object.keys(mltplChcOp);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <HeaderView />
        {!!numberOfAnswers.length &&
          numberOfAnswers.map((answer) => {
            return <ContentView key={answer} contentID={answer} />;
          })}
      </Box>
    </Box>
  );
}
