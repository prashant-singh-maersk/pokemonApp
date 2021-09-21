import styles from './search.module.css';
type Props = {
  value: string;
  onChange: (str: string) => void;
};
export default function Search({ value, onChange }: Props) {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.search}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder="Start typing to search"
      />
    </div>
  );
}
