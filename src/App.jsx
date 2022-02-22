import {useContext} from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import WebProdList from "./components/webProdList/WebProdList";
import Toggle from "./components/toggle/Toggle";
import {ContextTheme} from "./context";

const App = () => {
  const appTheme = useContext(ContextTheme);
  const ModeDark = appTheme.state.ModeDark;
  return (
    <div style={{backgroundColor: ModeDark ? "#222" : "white", color: ModeDark && "powderblue"}}>
      <Toggle />
      <Intro />
      <About />
      <WebProdList />
      <Contact />
    </div>
  );
};

export default App;