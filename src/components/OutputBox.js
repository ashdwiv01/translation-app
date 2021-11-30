import Ribbon from "./Ribbon";
import classes from "./OutputBox.module.css";
function OutputBox(props) {
  return (
    <div className={classes.body}>
      <Ribbon
        ribText="Translated Text in"
        getLang={(lang) => props.getOutputLang(lang)}
      />
      <textarea
        className={classes.box}
        id="outputfield"
        value={props.output}
        rows="5"
      ></textarea>
    </div>
  );
}

export default OutputBox;
