import {
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetChckVal, SetChckEtc } from "../../features/preview/previewSlice";

export function ChkboxAns({ answer, contentID }) {
  const isEtc = answer.etc;
  const isEssential = answer.essential;
  const ansTitle = answer.content;
  const ansOpt = answer.opt;

  const [optState, setOptState] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const temp = optState.concat(event.target.name);
    if (event.target.checked) {
      setOptState(temp);
      dispatch(SetChckVal([contentID, temp]));
    } else {
      const filtedOpt = temp.filter((opt) => opt !== event.target.name);
      setOptState(filtedOpt);
      dispatch(SetChckVal([contentID, filtedOpt]));
    }
  };

  const handleEtc = (event) => {
    const temp = optState.concat("기타");
    setOptState(temp);
    dispatch(SetChckVal([contentID, temp]));
    dispatch(SetChckEtc([contentID, event.target.value]));
  };

  const indexOfEtc = useSelector(
    (state) => state.preview.previewContent[contentID]
  ).indexOf("기타");

  return (
    <Box>
      <Box sx={{ display: "flex", fontSize: 20 }}>
        {ansTitle} {isEssential && <Box sx={{ ml: 1, color: "red" }}>*</Box>}
      </Box>

      <FormControl sx={{ mt: 2 }}>
        <FormGroup>
          {Object.values(ansOpt).map((opt, idx) => (
            <FormControlLabel
              key={Object.keys(ansOpt)[idx]}
              control={
                <Checkbox
                  name={Object.keys(ansOpt)[idx]}
                  onChange={handleChange}
                />
              }
              label={opt}
            />
          ))}
          {isEtc && (
            <FormControlLabel
              control={
                <Checkbox
                  name="기타"
                  onChange={handleChange}
                  checked={indexOfEtc >= 0 ? true : false}
                />
              }
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box>기타</Box>
                  <TextField
                    variant="standard"
                    sx={{ width: 600, ml: 1 }}
                    onChange={handleEtc}
                  />
                </Box>
              }
            />
          )}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
