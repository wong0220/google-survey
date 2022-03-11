import { TextField, Box } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { useDispatch, useSelector } from "react-redux";
import { SetMltAns } from "../features/content/contentSlice";

export function RadioBtn({ contentId, nanoOptID }) {
  const contentID = contentId === undefined ? "firstContent" : contentId;
  const optID = nanoOptID === undefined ? "firstOpt" : nanoOptID;

  const optContent = useSelector(
    (state) => state.content.mltplChcOp[contentID].opt[optID]
  );

  //   const temp = useSelector((state) =>
  //     console.log(state.content.mltplChcOp[contentID])
  //   );
  //   console.log(contentID);
  const dispatch = useDispatch();

  return (
    <Box sx={{ mt: 3 }}>
      <CircleOutlinedIcon sx={{ color: "gray" }} />
      <TextField
        id="headerID"
        value={optContent}
        variant="standard"
        size="small"
        sx={{ width: "90%" }}
        onChange={(event) => {
          dispatch(SetMltAns([contentID, optID, event.target.value]));
        }}
      />
    </Box>
  );
}
