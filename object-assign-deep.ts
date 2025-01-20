function objectAssignDeep(target: {}, ...sources: any[]) {
  for (const source of sources) {
    for (const [key, value] of Object.entries(source || {})) {
      target[key] = value && typeof value === 'object' && !Array.isArray(value) ? objectAssignDeep(structuredClone(target[key] || {}) as Record<string, any>, value) : structuredClone(value);
    }
  }
  return target;
}

export { objectAssignDeep };
