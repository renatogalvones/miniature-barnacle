import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import debounce from "lodash.debounce";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const mockFetch = async () => {
    return {
      label: "pos" | "neg" | "neutral",
      probability: { pos: 0.7, neg: 0.1, neutral: 0.2 },
    };
  };

  const handleTyping = debounce(() => {
    console.log("handle");
    // TRIGGERS FETCH
    // TOGGLE LOADING
    // SET RESULT
  }, 500);

  return (
    <>
      <div>HEADER</div>
      <div>
        <div>
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            onChange={() => handleTyping()}
          />
        </div>
        <div>output</div>
      </div>
    </>
  );
}

export default App;
