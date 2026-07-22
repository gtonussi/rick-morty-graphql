import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { useQuery as mockUseQuery } from "@apollo/client/react";

jest.mock("@apollo/client/react", () => ({
  useQuery: jest.fn(),
}));

jest.mock("@apollo/client", () => ({
  gql: (template) => template,
}));

beforeEach(() => {
  mockUseQuery.mockReset();
});

test("renders loading state", () => {
  mockUseQuery.mockReturnValue({ loading: true, error: null, data: null });

  render(<App />);

  expect(screen.getByText(/Loading characters/i)).toBeInTheDocument();
});

test("renders characters and pagination controls", async () => {
  mockUseQuery.mockReturnValue({
    loading: false,
    error: null,
    data: {
      characters: {
        info: {
          pages: 1,
          next: null,
          prev: null,
        },
        results: [
          {
            id: "1",
            name: "Rick Sanchez",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            status: "Alive",
            species: "Human",
            location: {
              name: "Earth (C-137)",
            },
          },
        ],
      },
    },
  });

  render(<App />);

  await waitFor(() =>
    expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument(),
  );
  expect(screen.getByText(/Page 1 of 1/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Previous/i })).toBeDisabled();
  expect(screen.getByRole("button", { name: /Next/i })).toBeDisabled();
});

test("renders error state", async () => {
  mockUseQuery.mockReturnValue({
    loading: false,
    error: { message: "GraphQL error" },
    data: null,
  });

  render(<App />);

  await waitFor(() =>
    expect(screen.getByText(/Error: GraphQL error/i)).toBeInTheDocument(),
  );
});
