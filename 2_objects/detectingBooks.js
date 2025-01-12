export default function findWhere(objList, searchParams) {
  const keys = Object.keys(searchParams);
  const result = objList.filter((item) => {
    for (const key of keys) {
      if (item[key] !== searchParams[key]) {
        return false;
      }
    }
    return true;
  })[0];

  if (!result) {
    return null;
  }

  return result;
}

console.log(
  findWhere(
    [
      { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
      { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
      { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
      { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
      { title: 'Still foooing', author: 'FooBar', year: 3333 },
      { title: 'Happy Foo', author: 'FooBar', year: 4444 },
    ],
    { author: 'Shakespeare', year: 1611, title: 'The Tempest' },
  ),
); // { title: 'Cymbeline', author: 'Shakespeare', year: 1611 }
