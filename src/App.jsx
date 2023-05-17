import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams.jsx";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!!</h1>
      <SearchParams />
      {/* <Pet name="Lua" animal="Dog" breed="Havanes" />
      <Pet name="Shina" animal="Dog" breed="Havanes" />
      <Pet name="Suzy" animal="Cat" breed="Mix" /> */}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
