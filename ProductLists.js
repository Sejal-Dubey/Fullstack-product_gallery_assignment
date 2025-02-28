const products = [
    { name: "Miniso College Bag", description: "Cool and stylish college bags", price: 10, imageUrl: "/bag1.jpg" },
    { name: "Harry College Bag", description: "Spacious and comfy backpack", price: 20, imageUrl: "/bag2.jpg" },
    {name:"Nike bagpack",description:"Stylish and durable",price:10,imgeUrl:"/bag3.jpg"}
];

export default function ProductList() {
    return (
        <div className="grid">
            {products.map((product, index) => (
                <div key={index} className="product-card">
                    <img src={product.imageUrl} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p className="price">₹{product.price}</p>
                </div>
            ))}
        </div>
    );
}
