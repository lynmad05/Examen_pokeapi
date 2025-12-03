const Card = ({ item }) => {
    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                <h5 className="card-title text-capitalize">
                    {item.name}
                </h5>
                <img src={item.image} alt={item.name} className="card-img-top" />
                <p className="card-text">
                    ID: {item.id}
                </p>
            </div>
        </div>
    );
};

export default Card;