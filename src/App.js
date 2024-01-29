import React from "react";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div>
      <div>
        <ButtonComponent text="CLICCA QUI" />
        <ImageComponent src="http://placekitten.com/300" alt="gattini" />
      </div>
      <div>
        <ButtonComponent text="CLICCA QUI" />
        <ImageComponent src="https://placebeard.it/640x360" alt="sparta" />
      </div>
      <div>
        <ButtonComponent text="CLICCA QUI" />
        <ImageComponent src="https://placebear.com/640/360" alt="gattini" />
      </div>
    </div>
  );
}

export default App;
