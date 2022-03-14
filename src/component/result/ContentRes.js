import { Box, Divider } from "@mui/material";
import { useSelector } from "react-redux";

export function ContentRes({ title }) {
  const ansTitle = useSelector(
    (state) => state.content.mltplChcOp[title].content
  );
  const answer = useSelector((state) => state.preview.previewContent[title]);

  const ansType = useSelector((state) => state.content.mltplChcOp[title].type);

  const dropVal = useSelector(
    (state) => state.content.mltplChcOp[title].opt[answer]
  );
  const etcVal = useSelector((state) => state.preview.chckEtc[title]);

  const checkVal = useSelector((state) => state.content.mltplChcOp[title].opt);

  function rtrnType(type) {
    if (ansType === 30) {
      if (typeof answer === "object") {
        return (
          <Box sx={{ m: 3 }}>
            {answer[0]} : {answer[1]}
          </Box>
        );
      } else {
        return <Box sx={{ m: 3 }}>{checkVal[answer]}</Box>;
      }
    } else if (ansType === 40) {
      if (answer.indexOf("기타") >= 0) {
        return (
          <Box>
            {answer.map((el) => (
              <Box sx={{ m: 3 }}>{checkVal[el]}</Box>
            ))}
            <Box sx={{ m: 3 }}>기타내용 : {etcVal}</Box>
          </Box>
        );
      } else {
        return answer.map((el) => <Box sx={{ m: 3 }}>{el}</Box>);
      }
    } else if (ansType === 50) {
      return <Box sx={{ m: 3 }}>{dropVal}</Box>;
    } else {
      return <Box sx={{ m: 3 }}>{answer}</Box>;
    }
  }

  return (
    <Box>
      <Box sx={{ m: 3, fontSize: 21 }}>{ansTitle}</Box>

      {rtrnType(ansType)}
      <Divider />
    </Box>
  );
}
