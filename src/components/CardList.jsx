import Card from "./Card";

export default function CardList({ items }) {
  return (
    <div className="row g-4">
      {items.map((item) => (
        <div key={item.id} className="col-md-4">
          <Card item={item} />
        </div>
      ))}
    </div>
  );
}