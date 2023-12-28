import { FrogNavBarHeader3, NewFrogsCollection } from "./ui-components";
import "./App.css";
import frogHeaderPic from "./assets/images/frogHeaderPic.jpg";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App({ user, signOut }) {
  const frogNavBarHeader3Overrides = {
    "403618143_1392773568283732_3797741273867155381_n 1": {
      src: frogHeaderPic,
    },
    image: {
      src: user?.attributes?.profile,
    },
    Button: {
      onClick: signOut,
    },
  };

  return (
    <div className="App">
      <FrogNavBarHeader3 overrides={frogNavBarHeader3Overrides} width="100%" />
      <header className="App-header">
        <NewFrogsCollection />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
