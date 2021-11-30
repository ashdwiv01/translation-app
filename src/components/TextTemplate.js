
import Ribbon from "./Ribbon";
import Textbox from "./Textbox";
import classes from "./TextTemplate.module.css";

function TextTemplate(props) {
  return (
    <div className={classes.body}>
      <Ribbon ribText="Source Text in" getLang={lang => props.getInputLang(lang)}/>
      <Textbox getInputText={inTx => props.getInText(inTx)}/>

    </div>
  );
}

export default TextTemplate;
