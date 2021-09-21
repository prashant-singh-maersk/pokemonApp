import type { NextPage } from 'next';
import PokemonCard from '../components/pokemonCard/card';
import usePokemonData from '../hooks/usePokemonData';
import { getImageUrl } from '../services/getImageUrl';
import styles from '../styles/Home.module.css';
import Pagination from '../components/pagination/pagination';
import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import Search from '../components/search/search';
import ShimmerGroup from '../components/cardShimmer/shimmerGroup';
import Layout from '../components/layout/layout';
const Home: NextPage = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const { loading, error, data } = usePokemonData({
    offset,
    limit,
    search: debouncedSearch,
  });
  console.log(data);
  const pagination = (
    <Pagination
      onClickPrevious={() => {
        setOffset(offset - limit);
      }}
      onClickNext={() => {
        setOffset(offset + limit);
      }}
      showPrevious={offset !== 0}
      limit={limit}
      setLimit={(input: number) => {
        setLimit(input);
        setOffset(0);
      }}
    />
  );
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.filterWrapper}>
          <Search
            value={search}
            onChange={(input) => {
              setSearch(input);
              setOffset(0);
            }}
          />
          {pagination}
        </div>
        <div className={styles.container}>
          {loading && <ShimmerGroup count={10} />}
          {data
            ? data.pokemon_v2_pokemon.map(
                (item: {
                  name: string;
                  weight: number;
                  height: number;
                  id: number;
                  pokemon_v2_pokemonabilities: any;
                }) => (
                  <PokemonCard
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    weight={item.weight}
                    height={item.height}
                    imgUrl={getImageUrl(item.id)}
                    abilities={item.pokemon_v2_pokemonabilities.map(
                      (ability: any, index: number) => {
                        return ability.pokemon_v2_ability.name;
                      },
                    )}
                  />
                ),
              )
            : null}
        </div>
        {pagination}
      </main>
    </Layout>
  );
};

export default Home;
