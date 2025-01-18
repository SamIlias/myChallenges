import sortDeps from './sortDeps';

test('5_trees: sortDeps test', () => {
  const deps1 = {
    mongo: [],
    tzinfo: ['thread_safe'],
    uglifier: ['execjs'],
    execjs: ['thread_safe', 'json'],
    redis: [],
  };

  expect(sortDeps(deps1)).toEqual([
    'mongo',
    'thread_safe',
    'tzinfo',
    'json',
    'execjs',
    'uglifier',
    'redis',
  ]);
});
