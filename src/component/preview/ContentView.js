import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { ShortAns } from "./ShortAns";
import { LongAns } from "./LongAns";
import { RadiAns } from "./RadioAns";
import { ChkboxAns } from "./ChkboxAns";

export function ContentView({ contentID }) {
  const answer = useSelector((state) => state.content.mltplChcOp[contentID]);
  const answerType = answer.type;

  function rtrnType(type) {
    if (type === 10) {
      return <ShortAns answer={answer} contentID={contentID} />;
    } else if (type === 20) {
      return <LongAns answer={answer} contentID={contentID} />;
    } else if (type === 30) {
      return <RadiAns answer={answer} contentID={contentID} />;
    } else if (type === 40) {
      return <ChkboxAns answer={answer} contentID={contentID} />;
    }
  }

  return (
    <Box
      sx={{
        width: 768,
        bgcolor: "white",
        border: " 1px solid gray",
        borderRadius: 4,
        mt: 3,
        p: 3,
        boxShadow: 2,
      }}
    >
      {rtrnType(answerType)}
    </Box>
  );
}
