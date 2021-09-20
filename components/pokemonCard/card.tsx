import PokemonInfo from '../pokemonInfo/pokemonInfo';
import styles from './pokemonCard.module.css';
import Image from './../image/image';
import Link from 'next/link';
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
  id,
}: PokemonCardPropTypes) {
  return (
    <Link href={`/${id}`}>
      <a className={styles.pokemonCard}>
        <div className={styles.imgWrapper}>
          <Image src={imgUrl} alt={name} />
        </div>
        <div className={styles.pokemonDetails}>
          <PokemonInfo label={'Name'} value={name} />
          <PokemonInfo label={'Height'} value={height + ' ft'} />
          <PokemonInfo label={'Weight'} value={weight + ' lbs'} />
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
    </Link>
  );
}
export default PokemonCard;
