import { Box, TextField, Divider } from "@mui/material";
import { SelectBox } from "../survey/SelectBox";
import { RadioBtn } from "../survey/RadioBtn";
import { SetAnsTitle } from "../../features/content/contentSlice";
import { useDispatch, useSelector } from "react-redux";
import { RadioOpt } from "../survey/RadioOpt";
import { Etc } from "./Etc";
import { BottomBar } from "./BottomBar";
import { Answer } from "./Answer";

export function Content({ nanoID }) {
  const answerTitle = useSelector(
    (state) => state.content.mltplChcOp[nanoID].content
  );
  const isEtc = useSelector((state) => state.content.mltplChcOp[nanoID].etc);
  const totalOps = useSelector((state) => state.content.mltplChcOp[nanoID].opt);
  const numberOfOps = Object.keys(totalOps);
  const optType = useSelector((state) => state.content.mltplChcOp[nanoID].type);
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

      <SelectBox contentID={nanoID} />

      {optType === 30 || optType === 40 || optType === 50 ? (
        numberOfOps.map((opt) => (
          <RadioBtn key={opt} contentId={nanoID} nanoOptID={opt} />
        ))
      ) : (
        <Answer optType={optType} />
      )}

      {isEtc && <Etc contentID={nanoID} />}

      {optType === 30 || optType === 40 || optType === 50 ? (
        <RadioOpt contentID={nanoID} />
      ) : (
        <Box />
      )}

      <Divider sx={{ mt: 3 }} />

      <BottomBar contentID={nanoID} />
    </Box>
  );
}
