export default str => {
  const env = 'environment';
  const pref = 'X_FORWARDED_';
  const reg = new RegExp(`${env}="([^"]+)"`, 'g');
  const matches = [...str.matchAll(reg)].map(match => match[1]);
  const result = matches
    .join(',')
    .split(',')
    .filter(item => item.startsWith(pref))
    .map(item => item.slice(pref.length))
    .join(',');
  return result;
};
