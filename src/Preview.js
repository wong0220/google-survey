import { Box, Button, Alert } from "@mui/material";
import { HeaderView } from "./component/preview/HeaderView";
import { useSelector } from "react-redux";
import { ContentView } from "./component/preview/ContentView";
import { useNavigate } from "react-router";

export function Preview() {
  const mltplChcOp = useSelector((state) => state.content.mltplChcOp);
  const previewAns = Object.keys(
    useSelector((state) => state.preview.previewContent)
  );

  const numberOfAnswers = Object.keys(mltplChcOp);
  const navigate = useNavigate();

  // console.log(previewAns);
  // console.log(mltplChcOp);

  const submitForm = () => {
    const temp = Object.keys(mltplChcOp).filter(
      (el) => mltplChcOp[el].essential === true
    );

    let count = 0;
    for (let key of temp) {
      if (previewAns.indexOf(key) >= 0) {
        count++;
      }
    }

    if (temp.length === count) {
      navigate("/result");
    } else {
      alert("응답하지 않은 필수질문이 있습니다.");
    }
  };
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
          <Button variant="contained" size="large" onClick={submitForm}>
            제출
          </Button>
          <Button size="large">양식 지우기</Button>
        </Box>
      </Box>
    </Box>
  );
}
