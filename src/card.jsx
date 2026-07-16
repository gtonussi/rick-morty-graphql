const Card = ({ character }) => {
  return (
    <div className="card w-25">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          <strong>Status:</strong> {character.status}
          <br />
          <strong>Species:</strong> {character.species}
          <br />
          <strong>Location:</strong> {character.location.name}
        </p>
      </div>
    </div>
  );
};

export default Card;
