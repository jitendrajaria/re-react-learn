import { useEffect, useState } from "react";
import useBreedList from "./useBreedList.js";
import Results from "./Results.jsx";

export default function SearchParams() {
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("");
  const [animal, setAnimal] = useState("");
  const [, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location"> Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />

        <label htmlFor="Animal">Animal</label>
        <select
          id="Animal"
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
          onBlur={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
        >
          <option />
          {ANIMALS.map((animal) => {
            return <option key={animal}>{animal}</option>;
          })}
        </select>

        <label htmlFor="Breed">Breed</label>
        <select
          id="Breed"
          disabled={breeds.length <= 0}
          onChange={(e) => {
            setBreed(e.target.value);
          }}
          onBlur={(e) => {
            setBreed(e.target.value);
          }}
        >
          <option />
          {breeds.map((breed) => {
            return <option key={breed}>{breed}</option>;
          })}
        </select>

        <button
          onClick={(e) => {
            e.preventDefault();
            requestPets();
          }}
        >
          Submit
        </button>
      </form>

      <Results />
    </div>
  );
}
