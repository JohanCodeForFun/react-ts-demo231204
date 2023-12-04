import { Product } from "./client/types";

type ProductListProps = {
    products: Product[];
    isLoading: boolean;
}

export const ProductList = ({ products, isLoading }: ProductListProps) => {
    return isLoading ? <p>Laddar...</p> : <ul>
        {products.map(product => <li>{product.title}</li>)}
    </ul>
}