import {
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SetRadioVal } from "../../features/preview/previewSlice";

export function RadiAns({ answer, contentID }) {
  const isEtc = answer.etc;
  const isEssential = answer.essential;
  const ansTitle = answer.content;
  const ansOpt = answer.opt;
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [etcValue, setEtcValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "기타") {
      dispatch(SetRadioVal([contentID, event.target.value, etcValue]));
    } else {
      dispatch(SetRadioVal([contentID, event.target.value]));
    }
  };

  const handleEtc = (event) => {
    setEtcValue(event.target.value);
    dispatch(SetRadioVal([contentID, "기타", event.target.value]));
  };

  return (
    <Box>
      <Box sx={{ display: "flex", fontSize: 20 }}>
        {ansTitle} {isEssential && <Box sx={{ ml: 1, color: "red" }}>*</Box>}
      </Box>

      <FormControl sx={{ mt: 2 }}>
        <RadioGroup value={value} onChange={handleChange}>
          {Object.values(ansOpt).map((opt, idx) => (
            <FormControlLabel
              key={Object.keys(ansOpt)[idx]}
              value={Object.keys(ansOpt)[idx]}
              control={<Radio />}
              label={opt}
            />
          ))}
          {isEtc && (
            <FormControlLabel
              value="기타"
              control={<Radio />}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box>기타</Box>
                  <TextField
                    value={etcValue}
                    variant="standard"
                    sx={{ width: 600, ml: 1 }}
                    onChange={handleEtc}
                  />
                </Box>
              }
            />
          )}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
