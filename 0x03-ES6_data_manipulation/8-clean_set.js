export default function cleanSet(set, startString) {
  const parts = [];
  if (
    set
    && set instanceof Set
    && startString
    && typeof startString === 'string'
  ) {
    for (const value of set.values()) {
      if (typeof value === 'string' && value.startsWith(startString)) {
        const valueSubStr = value.substring(startString.length);

        if (valueSubStr && valueSubStr !== value) parts.push(valueSubStr);
      }
    }
    return parts.join('-');
  }
  return '';
}
