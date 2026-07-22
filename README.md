### Rick and Morty GraphQL

This is an exercise project that connects with Rick and Morty API using GraphQL.

The project is an exercise in consuming a GraphQL API from a React client. It now includes a reusable data hook, pagination, better error handling, and a documented environment configuration.

<img src="README-image.png" alt="Project preview" width="400" />

---

### Stack

- React
- GraphQL
- Apollo Client
- Create React App
- Jest / React Testing Library

---

### What changed

- Added `src/hooks/useCharacters.js` to encapsulate GraphQL querying and page state.
- Added `src/components/CharacterGrid.jsx` for a cleaner UI rendering layer.
- Enhanced `src/card.jsx` with safe location access and placeholder handling.
- Added `src/App.css` for better layout, responsive grid, and readable error/loading states.
- Added pagination controls in `src/App.jsx` using GraphQL page info.
- Added `src/App.test.jsx` to verify loading, results, and pagination behavior.
- Added `.env.example` and updated `src/index.js` to use `REACT_APP_API_URL` with a fallback default.

---

### Installation

Install the dependencies:

```bash
npm install
```

Copy configuration values:

```bash
cp .env.example .env
```

Start the development server:

```bash
npm start
```

Open http://localhost:3000 in your browser.

---

### Run with Docker

Build and run with Docker Compose:

```bash
docker compose up --build
```

Then open http://localhost:3000.

To stop it:

```bash
docker compose down
```

You can override the API URL when building:

```bash
REACT_APP_API_URL=https://rickandmortyapi.com/graphql docker compose up --build
```

Or use plain Docker commands:

```bash
docker build -t rick-morty-graphql .
docker run --rm -p 3000:80 rick-morty-graphql
```

---

### Running tests

```bash
npm test
```

For a CI-friendly run:

```bash
npm run test:ci
```
