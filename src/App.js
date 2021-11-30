import { useState } from "react";

import TextTemplate from "./components/TextTemplate";
import OutputBox from "./components/OutputBox";
import classes from "./App.module.css";

function App() {
  const [inputLang, setInputLang] = useState("en");
  const [outputLang, setOutputLang] = useState("en");

  const [inputText, setInputText] = useState(
    "Your translated text will appear here."
  );
  const [outputText, setOutputText] = useState();

  let formData = new FormData();
  formData.append("q", `${inputText}`);
  formData.append("source", `${inputLang}`); //`${inputLang}`
  formData.append("target", `${outputLang}`);

  function translate() {
    fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setOutputText((prevData) => data);
      });
  }
 
  return (
    <div className={classes.body}>
      <h1>The Translation App</h1>
      <TextTemplate
        getInputLang={(inLg) => setInputLang((prevLg) => inLg)}
        getInText={(inTx) => setInputText((prevTx) => inTx)}
      />
      <OutputBox
        getOutputLang={(outLg) => setOutputLang((prevLg) => outLg)}
        output={
          outputText
            ? outputText["translatedText"]
            : "Your translated text will appear here."
        }
      />
      <button onClick={translate}>Translate</button>
    </div>
  );
}

export default App;
