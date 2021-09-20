import styles from './chips.module.css';
export function Chips({ text }: { text: string | number }) {
  return <div className={styles.chips}>{text}</div>;
}
type obj = {
  [key: string]: any;
};
export default function ChipGroup({
  data,
  selector,
}: {
  data: obj[];
  selector: string;
}) {
  return data.map((item) => {
    return <Chips key={item[selector]} text={item[selector]} />;
  });
}
