import { useState } from "react";
import useCharacters from "./hooks/useCharacters";
import CharacterGrid from "./components/CharacterGrid";
import "./App.css";

const App = () => {
  const [page, setPage] = useState(1);
  const { loading, error, characters, pageInfo } = useCharacters(page);

  const goPrevious = () => {
    if (pageInfo.prev) {
      setPage(pageInfo.prev);
    }
  };

  const goNext = () => {
    if (pageInfo.next) {
      setPage(pageInfo.next);
    }
  };

  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>Rick and Morty GraphQL</h1>
        <p className="app-subtitle">
          Browse characters from a public GraphQL API with pagination and strong
          loading/error handling.
        </p>
      </header>

      {loading && <div className="status-message">Loading characters…</div>}
      {error && (
        <div className="status-message status-error">
          Error: {error.message}
        </div>
      )}

      {!loading && !error && <CharacterGrid characters={characters} />}

      <footer className="pagination-bar">
        <button onClick={goPrevious} disabled={!pageInfo.prev}>
          Previous
        </button>
        <span>
          Page {page} of {pageInfo.pages || "?"}
        </span>
        <button onClick={goNext} disabled={!pageInfo.next}>
          Next
        </button>
      </footer>
    </main>
  );
};

export default App;
