import styles from './pokemonInfo.module.css';
type PropsType = {
  label: string;
  value: any;
};
export default function PokemonInfo({ label, value }: PropsType) {
  return (
    <div className={styles.pokemonInfo}>
      <label>{label} : </label>
      <span className={styles.pokeInfoValueContainer}>{value}</span>
    </div>
  );
}
