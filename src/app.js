import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import Question from "./components/Questions";
import Ppp from "./Appnew.jsx";

function App() {
    return(
      <div className="App">
          <Switch>
              <Route path={"/"} exact component = {Ppp}/>
            
              <Route path={"/Question/:question"} exact component = {Question}/>
              <Redirect to={"/"} />
          </Switch>
      </div>
    );
}
export default App;