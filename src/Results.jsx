import Pet from "./Pet";

const Results = ({ pets = [] }) => {
  return (
    <div className="search">
      {!pets.length === 0 ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              location={`${pet.city} ${pet.state}`}
              id={pet.id}
              images={pet.images}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
