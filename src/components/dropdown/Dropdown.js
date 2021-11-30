import { useState, useEffect, useRef } from "react";
import classes from "./Dropdown.module.css";

function Dropdown(props) {

  const [langs, setLangs] = useState([]);

  const selectedLang = useRef();

  useEffect(() => {
    fetch("https://libretranslate.de/languages")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setLangs(json);
      });
  }, []);


  function langSelectHandler(){
    props.getLangCode(selectedLang.current.value);
  };

  return (
    <select className={classes.body}  ref={selectedLang} onChange={langSelectHandler} > 
      {langs.map((obj) => {
        return (
          <option key={obj.code} value={obj.code}>
            {obj.name}
          </option>
        );
      })}
    </select>
  );
}

export default Dropdown;
