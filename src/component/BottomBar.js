import { Box, Switch, Divider } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import { SetEssential } from "../features/content/contentSlice";
import { useDispatch, useSelector } from "react-redux";

export function BottomBar({ contentID }) {
  const dispatch = useDispatch();

  const temp = useSelector((state) => console.log(state.content.mltplChcOp));
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        mt: 3,
      }}
    >
      <ContentCopyIcon />
      <DeleteIcon sx={{ ml: 2, mr: 3 }} />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ mr: 2 }}
        />
        필수
        <Switch
          onChange={(event) => {
            dispatch(SetEssential([contentID, event.target.checked]));
          }}
        />
      </Box>
    </Box>
  );
}
