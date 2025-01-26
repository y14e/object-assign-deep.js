function objectAssignDeep(target, ...sources) {
  const isObject = value => {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  };
  for (const source of sources) {
    Object.entries(source || {}).forEach(([key, value]) => {
      const targetValue = target[key];
      target[key] = isObject(value) ? objectAssignDeep(isObject(targetValue) ? structuredClone(targetValue) : {}, value) : structuredClone(value);
    });
  }
  return target;
}

export { objectAssignDeep };
