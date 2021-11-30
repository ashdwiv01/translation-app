import { useRef } from "react";
import classes from "./Textbox.module.css";

function Textbox(props) {
  const inputText = useRef();
  function sendText(){
    props.getInputText(inputText.current.value);
  }
  return (
    <div>
      <textarea
        className={classes.body}
        id="inputfield"
        required
        rows="5"
        ref={inputText}
        onChange={sendText}
      ></textarea>
    </div>
  );
}

export default Textbox;
