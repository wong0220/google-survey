import { Box } from "@mui/material";
import { Header } from "./component/Header";
import { Content } from "./component/Content";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { Increment } from "./features/content/contentSlice";

function Survey() {
  const totalAnswers = useSelector((state) => state.content.value);
  const dispatch = useDispatch();
  console.log(totalAnswers);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header />
        <Content />
        {!!totalAnswers.length &&
          totalAnswers.map((answer) => {
            return <Content key={answer} nanoID={answer} />;
          })}
      </Box>
      <AddCircleRoundedIcon
        sx={{
          fontSize: 55,
          color: "#34a9fa",
          position: "sticky",
          top: 200,
          cursor: "pointer",
        }}
        onClick={() => {
          dispatch(Increment(nanoid()));
        }}
      />
    </Box>
  );
}

export default Survey;
