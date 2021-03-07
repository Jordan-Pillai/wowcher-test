export const formatNumber = (number) =>
  new Intl.NumberFormat('en', { minimumFractionDigits: 2 }).format(number);

export const formatProductArray = (data) => {
  const flatten = (arr) => [].concat(...arr);
  const productArray = flatten(Array.from(data, (array) => array.products));
  const results = [];
  const obj = {};

  productArray.forEach(({ name, unitPrice, sold = 0 }) => {
    if (!obj.name) {
      obj.name = {
        name,
        unitPrice,
        sold,
      };
      results.push(obj.name);
    }
    obj.name.sold += sold;
  }, obj);

  return results.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
};

export const calculateTotal = (arr) =>
  arr.reduce((sum, { unitPrice, sold }) => sum + unitPrice * sold, 0);
