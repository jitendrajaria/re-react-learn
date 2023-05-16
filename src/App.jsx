import { createRoot } from "react-dom";
import Pet from "./Pet.jsx";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!!</h1>
      <Pet name="Lua" animal="Dog" breed="Havanes" />
      <Pet name="Shina" animal="Dog" breed="Havanes" />
      <Pet name="Suzy" animal="Cat" breed="Mix" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
