import React from 'react';

import { formatNumber, calculateTotal } from '../../utils';

const ProductTable = ({ filteredProducts }) => {
  const formattedTotal = formatNumber(calculateTotal(filteredProducts));

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Revenue</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((filteredProduct) => (
          <tr key={filteredProduct.name}>
            <td>{filteredProduct.name}</td>
            <td>
              {formatNumber(filteredProduct.sold * filteredProduct.unitPrice)}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{formattedTotal}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ProductTable;
