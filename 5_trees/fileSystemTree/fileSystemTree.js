export const mkdir = (name, children = [], meta = {}) => ({
  name,
  meta,
  type: 'directory',
  children,
});

export const mkfile = (name, meta = {}) => ({
  name,
  meta,
  type: 'file',
});

export const getName = node => node.name;
export const getMeta = node => node.meta;
export const getChildren = dir => dir.children;
export const isDirectory = node => node.type === 'directory';
export const isFile = node => node.type === 'file';
