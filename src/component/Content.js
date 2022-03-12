import { Box, TextField, Divider } from "@mui/material";
import { SelectBox } from "./SelectBox";
import { RadioBtn } from "./RadioBtn";
import { SetAnsTitle } from "../features/content/contentSlice";
import { useDispatch, useSelector } from "react-redux";
import { RadioOpt } from "./RadioOpt";
import { Etc } from "./Etc";
import { BottomBar } from "./BottomBar";

export function Content({ nanoID }) {
  const answerTitle = useSelector(
    (state) => state.content.mltplChcOp[nanoID].content
  );
  const isEtc = useSelector((state) => state.content.mltplChcOp[nanoID].etc);
  const totalOps = useSelector((state) => state.content.mltplChcOp[nanoID].opt);
  const numberOfOps = Object.keys(totalOps);

  const dispatch = useDispatch();
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
      <TextField
        id="filled-helperText"
        value={answerTitle}
        variant="filled"
        sx={{
          width: "60%",
        }}
        onChange={(event) =>
          dispatch(SetAnsTitle([nanoID, event.target.value]))
        }
      />
      <SelectBox />
      {numberOfOps.map((opt) => (
        <RadioBtn key={opt} contentId={nanoID} nanoOptID={opt} />
      ))}
      {isEtc && <Etc />}
      <RadioOpt contentID={nanoID} />
      <Divider sx={{ mt: 3 }} />
      <BottomBar />
    </Box>
  );
}
