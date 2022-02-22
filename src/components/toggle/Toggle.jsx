import "./toggle.css";
import Sol from "../../img/sol.png";
import Luna from "../../img/luna.png";
import {useContext} from "react";
import {ContextTheme} from "../../context";

const ToggleSwitch = () => {
  const themeToggle = useContext(ContextTheme);
  const ToggleHandle = () => {
    themeToggle.dispatch({type: "Toggle_Switch"});
  };
  return (
    <div className="toggle">
      <img src={Sol} alt="" className="toggle-icon" />
      <img src={Luna} alt="" className="toggle-icon" />
      <div className="toggle-button" onClick={ToggleHandle} style={{left: themeToggle.state.ModeDark ? 0 : 25}} />
    </div>
  );
};
export default ToggleSwitch;