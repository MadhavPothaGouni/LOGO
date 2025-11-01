// components/Pagination/Pagination.jsx
export default function Pagination({ page, totalPages, onChange }) {
  const go = p => onChange(Math.min(Math.max(1, p), totalPages));
  const items = Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 7); // simple window
  return (
    <nav className="pagination" aria-label="Pagination">
      <button onClick={() => go(page - 1)} disabled={page === 1}>Prev</button>
      {items.map(n => (
        <button key={n} onClick={() => go(n)} aria-current={page === n ? "page" : undefined}>
          {n}
        </button>
      ))}
      <button onClick={() => go(page + 1)} disabled={page === totalPages}>Next</button>
    </nav>
  );
}
