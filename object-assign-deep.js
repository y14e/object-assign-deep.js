function objectAssignDeep(target, ...sources) {
  for (const source of sources) {
    for (const [key, value] of Object.entries(source || {})) {
      target[key] = value && typeof value === 'object' && !Array.isArray(value) ? objectAssignDeep(structuredClone(target[key] || {}), value) : structuredClone(value);
    }
  }
  return target;
}

export { objectAssignDeep };
