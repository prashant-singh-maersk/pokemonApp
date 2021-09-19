import PokemonInfo from '../pokemonInfo/pokemonInfo';
import styles from './pokemonCard.module.css';
import Image from './../image/image';
type PokemonCardPropTypes = {
  id: number;
  name: string;
  height?: number;
  weight?: number;
  abilities?: string[];
  imgUrl?: string;
};
function PokemonCard({
  name = 'prashant',
  height = 50,
  weight = 90,
  abilities = [],
  imgUrl = '',
  id
}: PokemonCardPropTypes) {
  return (
    <a className={styles.pokemonCard} href={`/${id}`}>
      <div className={styles.imgWrapper}>
        <Image src={imgUrl} alt={name}/>
      </div>
      <div className={styles.pokemonDetails}>
        <PokemonInfo label={'Name'} value={name} />
        <PokemonInfo label={'Height'} value={height} />
        <PokemonInfo label={'Weight'} value={weight} />
        <PokemonInfo
          label={'Abilities'}
          value={
            <>
              {abilities.map((abilityName, index) => (
                <span key={abilityName}>{abilityName}</span>
              ))}
            </>
          }
        />
      </div>
    </a>
  );
}
export default PokemonCard;
