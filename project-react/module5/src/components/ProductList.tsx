// components/ProductList.tsx
import { useQuery } from '@tanstack/react-query';
import fetcher from '../utils/fetcher';

interface Product {
  id: number;
  name: string;
}

const ProductList = () => {
  const { data, error, isLoading } = useQuery<Product[]>({queryKey: ['products'], queryFn: () => fetcher('/api/products')});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <ul>
      {data && data.map((product) => (
        <li key={product.id}>
          <a href={`/products/${product.id}`}>{product.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;