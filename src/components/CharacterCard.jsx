const CharacterCard = ({ character }) => {
  const locationName = character.location?.name || "Unknown";
  const imageAlt = character.image
    ? `${character.name} avatar`
    : `${character.name}`;

  return (
    <article className="character-card">
      <div className="character-card-image-wrapper">
        {character.image ? (
          <img
            src={character.image}
            className="character-card-image"
            alt={imageAlt}
          />
        ) : (
          <div className="character-card-image placeholder">No image</div>
        )}
      </div>

      <div className="character-card-body">
        <h2>{character.name}</h2>
        <p>
          <strong>Status:</strong> {character.status || "Unknown"}
        </p>
        <p>
          <strong>Species:</strong> {character.species || "Unknown"}
        </p>
        <p>
          <strong>Location:</strong> {locationName}
        </p>
      </div>
    </article>
  );
};

export default CharacterCard;
