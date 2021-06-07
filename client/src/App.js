import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Background from '../src/utils/images/background.jpg'
import Navi from '../src/components/Navi/Navi'
import AboutMe from '../src/pages/about/AboutMe'
import Home from "../src/pages/Main/home";
import Projects from '../src/pages/Projects/Projects'
function App() {
  return (
    <div className="main-view"    fluid="true"
    style={{
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      minHeight: "100%",
      height: 1000,
      position: "fixed",
      width: "100%",
    }}>
      <Navi/>
      <HashRouter>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/Projects" component={Projects} />
        </Switch>
      
      </HashRouter>

    </div>
  );
}

export default App;
