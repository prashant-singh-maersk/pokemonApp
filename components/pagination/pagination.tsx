import styles from './pagination.module.css';
type PaginationPropTypes = {
  showPrevious: boolean;
  onClickPrevious: () => void;
  onClickNext: () => void;
  setLimit: (i: number) => void;
  total?: number;
  limit: number;
  offset?: number;
};
const LimitDropDown = ({
  setLimit,
  limit,
}: {
  setLimit: (i: number) => void;
  limit: number;
}) => (
  <select
    onChange={(e) => {
      setLimit(+e.target.value);
    }}
    value={limit}
  >
    <option value={10}>10</option>
    <option value={20}>20</option>
    <option value={50}>50</option>
  </select>
);
export default function Pagination({
  onClickPrevious,
  onClickNext,
  showPrevious,
  limit,
  setLimit,
}: PaginationPropTypes) {
  return (
    <div className={styles.pagination}>
      <div>
        showing {<LimitDropDown setLimit={setLimit} limit={limit} />} per page
      </div>
      {showPrevious && <button onClick={onClickPrevious}>Previous</button>}
      <button onClick={onClickNext}>Next</button>
    </div>
  );
}
