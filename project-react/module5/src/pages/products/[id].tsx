// pages/products/[id].tsx
import { GetServerSideProps } from 'next';
import ProductDetail from '../../components/ProductDetail';
import fetcher from '../../utils/fetcher';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const product = await fetcher(`/api/products/${id}`);

  return {
    props: {
      product,
    },
  };
};

const ProductDetailPage = ({ product }) => {
  return <ProductDetail product={product} />;
};

export default ProductDetailPage;