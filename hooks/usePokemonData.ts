import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
const GET_POKEMON = gql`
  query samplePokeAPIquery($offset: Int, $limit: Int, $search: String) {
    pokemon_v2_pokemon(offset: $offset, limit: $limit, order_by: {name: asc} ,where: {name: {_iregex: $search}}) {
      id
      height
      name
      weight
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
          id
          generation_id
        }
      }
    }
  }
`;
export type hookArgumentType = {
  offset: number;
  limit: number;
  search: string;
};
export default function usePokemonData({ offset, limit,search }: hookArgumentType) {
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { offset, limit,search },
  });

  return { loading, error, data };
}
