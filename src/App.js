import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import React,{Fragment} from 'react';
function App() {
  return (
    <Fragment>
      <Header>
      </Header>
      <main>
          <Meals />
        </main>
      </Fragment>
  );
}

export default App;
