import Card from "./Card";

const CardList = ({ items }) => (
    <div className="container">
        <div className="row">
            {items.map((item) => (
                <div className="col-md-4 mb-4" key={item.id || item.name}>
                    <Card item={item} />
                </div>
            ))}
        </div>
    </div>
);

export default CardList;
