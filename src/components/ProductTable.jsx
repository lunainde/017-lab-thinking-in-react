import React from "react";
import ProductRow from './ProductRow';

function ProductTable({ products }){
    return (
        <table>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>PRICE</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <ProductRow key={product.name} product={product} />
                ))}
            </tbody>
        </table>
    );
}

export default ProductTable;