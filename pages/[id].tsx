import { useRouter } from 'next/router';
import usePokemonDetailsData from '../hooks/usePokemonDetails';
import Layout from '../components/layout/layout';
import Image from '../components/image/image';
import { getImageUrl } from '../services/getImageUrl';
import styles from '../styles/detailPage.module.css';
import PokemonInfo from '../components/pokemonInfo/pokemonInfo';
import { Chips } from '../components/chips/chips';
export default function DetailPage(props: any) {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, loading } = usePokemonDetailsData({ id: id });
  const pokemonDetails = data ? data.pokemon_v2_pokemon[0] : {};
  const {
    name,
    height,
    weight,
    pokemon_v2_pokemonabilities: abilities,
    pokemon_v2_pokemonstats: stats,
    pokemon_v2_pokemontypes: pokeTypes,
  } = pokemonDetails;
  return (
    <Layout>
      <main className={styles.detailPage}>
        <div className={styles.imageContainer}>
          {id && (
            <Image src={getImageUrl(id)} width={400} height={400} alt={name} />
          )}
        </div>
        {data ? (
          <div className="wrapper">
            <PokemonInfo label={'Name'} value={name} />
            <PokemonInfo label={'Height'} value={height + ' ft'} />
            <PokemonInfo label={'Weight'} value={weight + ' lbs'} />
            <PokemonInfo
              label={'Abilities'}
              value={abilities.map((item: any) => {
                return (
                  <Chips key={item.id} text={item.pokemon_v2_ability.name} />
                );
              })}
            />
            <PokemonInfo
              label={'Stats'}
              value={stats.map((item: any) => {
                return (
                  <Chips
                    key={item.id}
                    text={`${item.pokemon_v2_stat.name} : ${item.base_stat}`}
                  />
                );
              })}
            />
            <PokemonInfo
              label={'Type'}
              value={pokeTypes.map((item: any) => {
                return <Chips key={item.id} text={item.pokemon_v2_type.name} />;
              })}
            />
          </div>
        ) : null}
      </main>
    </Layout>
  );
}
