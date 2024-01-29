import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div>
      <ButtonComponent text="CLICCA QUI" />
      <ImageComponent src="http://placekitten.com/300" alt="gattini" />
    </div>
  );
}

export default App;
