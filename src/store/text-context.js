import { createContext, useState } from "react";

const TextContext = createContext({
  inText: "",
  outText: "",
  inLang: "",
  outLang: "",
  updateInText: (newInText) => {},
  updateOutText: (newOutText) => {},
  updateInLang: (inLangCode) => {},
  upadteOutLang: (outLangCode) => {},
});

export function TextContextProvider(props) {
  const [inText, setInText] = useState();
  const [outText, setOutText] = useState();
  const [inLang, setInLang] = useState();
  const [outLang, setOutLang] = useState();

  function updateInTextHandler(newInText) {
    setInText(newInText);
  }
  function updateOutTextHandler(newOutText) {
    setOutText(newOutText);
  }
  function updateInLangHandler(inLangCode) {
    setInLang(inLangCode);
  }
  function updateOutLangHandler(outLangCode) {
    setOutLang(outLangCode);
  }

  const context = {
    inText: inText,
    outText: outText,
    inLang: inLang,
    outLang: outLang,
    updateInText: updateInTextHandler,
    updateOutText: updateOutTextHandler,
    updateInLang: updateInLangHandler,
    upadteOutLang: updateOutLangHandler,
  };

  return (
    <TextContext.Provider value={context}>
      {props.children}
    </TextContext.Provider>
  );
}

export default TextContext;
