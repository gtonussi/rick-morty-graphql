import { useQuery } from "@apollo/client/react";
import { GET_ALL_CHARACTERS } from "../queries";

const useCharacters = (page = 1) => {
  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page },
  });

  const characters = data?.characters?.results ?? [];
  const pageInfo = {
    pages: data?.characters?.info?.pages ?? null,
    next: data?.characters?.info?.next ?? null,
    prev: data?.characters?.info?.prev ?? null,
  };

  return { loading, error, characters, pageInfo };
};

export default useCharacters;
