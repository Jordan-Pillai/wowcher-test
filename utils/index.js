export const formatNumber = (number) =>
  new Intl.NumberFormat('en', { minimumFractionDigits: 2 }).format(number);

export const formatProductArray = (data) => {
  const productArray = data.reduce(
    (acc, current) => [...acc, ...current.products],
    []
  );

  const results = productArray.reduce((acc, current) => {
    const duplicate = acc.find((item) => item.name === current.name);

    if (duplicate) {
      return acc.map((product) =>
        product === duplicate
          ? { ...duplicate, sold: product.sold + current.sold }
          : product
      );
    }

    return [...acc, current];
  }, []);

  return results.sort((a, b) => a.name.localeCompare(b.name));
};

export const calculateTotal = (arr) =>
  arr.reduce((sum, { unitPrice, sold }) => sum + unitPrice * sold, 0);

