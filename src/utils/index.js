export const formatNumber = (number) =>
  new Intl.NumberFormat('en', { minimumFractionDigits: 2 }).format(number);

export const formatProductArray = (data) => {
  const flatten = (arr) => [].concat(...arr);
  const productArray = flatten(Array.from(data, (array) => array.products));
  const results = [];
  const obj = {};

  productArray.forEach((product) => {
    if (!obj[product.name]) {
      obj[product.name] = {
        name: product.name,
        unitPrice: product.unitPrice,
        sold: 0,
      };
      results.push(obj[product.name]);
    }
    obj[product.name].sold += product.sold;
  }, obj);

  return results.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
};

export const calculateTotal = (arr) =>
  arr.reduce((sum, { unitPrice, sold }) => sum + unitPrice * sold, 0);
