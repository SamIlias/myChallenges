export default (val, repl = '', replCount = 0) => {
  const iter = (value, replacer = '', spaceCount = 0, depth) => {
    const prefix = `${replacer.repeat(depth * spaceCount)}`;
    const lineBreak = spaceCount === 0 ? ' ' : '\n';

    if (typeof value === 'string') {
      return `${prefix}${value}`;
    }

    if (typeof value === 'number') {
      return `${prefix}${String(value)}`;
    }

    if (typeof value === 'boolean') {
      return `${prefix}${String(value)}`;
    }

    if (Array.isArray(value)) {
      const entries = value.map(item => {
        const newDepth = typeof item === 'object' ? depth + 1 : depth;
        const valString = `${iter(item, replacer, spaceCount, newDepth)}`;
        return `${valString}`;
      });

      const result = `${iter('[', replacer, spaceCount, depth - 1)}${lineBreak}${entries.join(`${lineBreak}`)}${lineBreak}${iter(']', replacer, spaceCount, depth - 1)}`;
      return result;
    }

    if (typeof value === 'object') {
      const keys = Object.keys(value);
      const entries = keys.map(key => {
        const keyString = `${iter(key, replacer, spaceCount, depth)}`;
        const newDepth = typeof value[key] === 'object' ? depth + 1 : 0;
        const valString = `${iter(value[key], replacer, spaceCount, newDepth)}`;
        return `${keyString}: ${valString}`;
      });

      const result = `{${lineBreak}${entries.join(`${lineBreak}`)}${lineBreak}${iter('}', replacer, spaceCount, depth - 1)}`;
      return result;
    }

    return null;
  };

  return iter(val, repl, replCount, 1);
};
