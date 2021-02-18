import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Protected from "./components/pages/Protected";
import AuthProvider from "./providers/auth-provider";
import Unauthorized from "./components/pages/Unauthorized";
import Userlist from "./components/pages/Userlist"
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/userlist" component={Userlist}/>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/protected" component={Protected} />
            <Route exact path="/unauthorized" component={Unauthorized} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
