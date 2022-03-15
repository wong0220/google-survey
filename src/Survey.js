import { Box } from "@mui/material";
import { Header } from "./component/survey/Header";
import { Content } from "./component/survey/Content";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { Increment } from "./features/content/contentSlice";
import { Link } from "react-router-dom";

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
          <Link
            to={{
              pathname: "/preview",
            }}
          >
            <VisibilityIcon
              sx={{ fontSize: 40, cursor: "pointer", color: "black" }}
            />
          </Link>
        </Box>
        <Header />
        {!!numberOfAnswers.length &&
          numberOfAnswers.map((answer) => {
            return <Content key={answer} nanoID={answer} />;
          })}
      </Box>
      <AddCircleRoundedIcon
        sx={{
          fontSize: 40,
          color: "#34a9fa",
          top: 200,
          position: "sticky",
          cursor: "pointer",
          ml: 2,
        }}
        onClick={() => {
          dispatch(Increment(nanoid()));
        }}
      />
    </Box>
  );
}

export default Survey;
