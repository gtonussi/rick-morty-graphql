import Card from "../Card";

const CharacterGrid = ({ characters }) => {
  if (!characters.length) {
    return <div className="empty-state">No characters found.</div>;
  }

  return (
    <section className="character-grid" aria-label="Character list">
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </section>
  );
};

export default CharacterGrid;
