import { TextField, Box } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { useDispatch, useSelector } from "react-redux";
import { SetMltAns, OptDecrement } from "../features/content/contentSlice";
import CancelIcon from "@mui/icons-material/Cancel";

export function RadioBtn({ contentId, nanoOptID }) {
  const optContent = useSelector(
    (state) => state.content.mltplChcOp[contentId].opt[nanoOptID]
  );

  const numberOfOpt = Object.keys(
    useSelector((state) => state.content.mltplChcOp[contentId].opt)
  ).length;

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
          dispatch(SetMltAns([contentId, nanoOptID, event.target.value]));
        }}
      />
      {numberOfOpt > 1 && (
        <CancelIcon
          sx={{ ml: 1, cursor: "pointer" }}
          onClick={() => {
            dispatch(OptDecrement([contentId, nanoOptID]));
          }}
        />
      )}
    </Box>
  );
}
