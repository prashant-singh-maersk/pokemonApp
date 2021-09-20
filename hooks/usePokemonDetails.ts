import { useQuery, gql } from '@apollo/client';
const GET_POKEMON_DETAILS = gql`
  query getPokemonDetailsQuery($id: Int) {
    pokemon_v2_pokemon(
      where: {id: {_eq: $id}}
    ) {
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
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
          id
        }
      }
      pokemon_v2_pokemonstats {
        pokemon_v2_stat {
          name
          id
        }
        base_stat
        id
        effort
      }
    }
  }
`;
export type hookArgumentType = {
    id?: number | undefined | string | string[];
  };
  export default function usePokemonDetailsData({
    id
  }: hookArgumentType) {
    const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
      variables: { id },
    });
  
    return { loading, error, data };
  }