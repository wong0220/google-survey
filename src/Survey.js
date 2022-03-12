import { Box, Divider } from "@mui/material";
import { Header } from "./component/Header";
import { Content } from "./component/Content";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { Increment } from "./features/content/contentSlice";

function Survey() {
  const mltplChcOp = useSelector((state) => state.content.mltplChcOp);
  const numberOfAnswers = Object.keys(mltplChcOp);
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%", mb: 2, textAlign: "right" }}>
          <VisibilityIcon sx={{ fontSize: 40, cursor: "pointer" }} />
        </Box>
        <Header />
        {!!numberOfAnswers.length &&
          numberOfAnswers.map((answer) => {
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
