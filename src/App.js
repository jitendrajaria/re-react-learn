const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, {
      name: "Lua",
      animal: "Dog",
      breed: "Havanes",
    }),
    React.createElement(Pet, {
      name: "Shina",
      animal: "Dog",
      breed: "Havanes",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Cat",
      breed: "Mix",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
