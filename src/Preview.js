import { Box, Button } from "@mui/material";
import { HeaderView } from "./component/preview/HeaderView";
import { useSelector } from "react-redux";
import { ContentView } from "./component/preview/ContentView";
import { Link } from "react-router-dom";

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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            mb: 3,
          }}
        >
          <Link
            to={{
              pathname: "/result",
            }}
          >
            <Button variant="contained" size="large">
              제출
            </Button>
          </Link>
          <Button size="large">양식 지우기</Button>
        </Box>
      </Box>
    </Box>
  );
}
