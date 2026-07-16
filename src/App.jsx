import { useQuery } from "@apollo/client/react";
import { GET_ALL_CHARACTERS } from "./queries";
import Card from "./card";

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: 1 },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error {error.message}</p>;

  return (
    <>
      <header>
        <h1 className="text-center m-5">Rick and Morty GraphQL</h1>
        <div className="row">
          {data?.characters.results.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
      </header>
    </>
  );
};

export default App;
