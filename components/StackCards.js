/* Sticky stacking deck: each card pins a little lower than the one before,
   so they pile up as you scroll instead of scrolling away. Pure CSS
   position:sticky — no scroll listener, no jank. */
export default function StackCards({ items }) {
  return (
    <div className="stackcards">
      {items.map((item, i) => (
        <article
          className="stackcards__card"
          key={item.title}
          style={{ top: `calc(14vh + ${i * 16}px)`, zIndex: i + 1 }}
        >
          <span className="stackcards__num">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <h3 className="stackcards__title">{item.title}</h3>
            <p className="stackcards__body">{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
