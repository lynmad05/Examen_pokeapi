const Card = ({ item }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 bg-white">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 capitalize">
                    {item.name}
                </div>
                <p className="text-gray-700 text-base">
                    ID: {item.url}
                </p>
            </div>
        </div>
    );
};

export default Card;