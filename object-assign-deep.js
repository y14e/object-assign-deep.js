function objectAssignDeep(target, ...sources) {
  const _is = value => {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  };
  for (const source of sources) {
    Object.entries(source || {}).forEach(([key, value]) => {
      const targetValue = target[key];
      target[key] = _is(value) ? objectAssignDeep(_is(targetValue) ? structuredClone(targetValue) : {}, value) : structuredClone(value);
    });
  }
  return target;
}

export { objectAssignDeep };
