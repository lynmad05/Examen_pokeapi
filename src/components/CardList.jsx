import Card from "./Card";

const CardList = ({ items }) => (
    <div className="grid grid-cols-3 gap-4 justify-items-center">
        {items.map((item) => (
            <Card key={item.name} item={item} />
        ))}
    </div>
);

export default CardList;