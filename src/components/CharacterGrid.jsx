import CharacterCard from "./CharacterCard";

const CharacterGrid = ({ characters }) => {
  if (!characters.length) {
    return <div className="empty-state">No characters found.</div>;
  }

  return (
    <section className="character-grid" aria-label="Character list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
};

export default CharacterGrid;
