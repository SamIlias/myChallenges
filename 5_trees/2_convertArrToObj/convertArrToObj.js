export default function convert(arr) {
  if (arr.length === 0) {
    return {};
  }

  const result = arr.reduce((acc, item) => {
    const key = item[0];
    const value = item[1];
    acc[key] = Array.isArray(value) ? convert([value]) : value;

    return acc;
  }, {});

  return result;
}
