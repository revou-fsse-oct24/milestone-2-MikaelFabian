// components/ProductDetail.tsx
interface Product {
  name: string;
  description: string;
  price: number;
}

const ProductDetail = ({ product }: { product: Product }) => {
    return (
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    );
  };
  
  export default ProductDetail;