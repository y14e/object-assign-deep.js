function objectAssignDeep<T extends {}, U extends any[]>(target: T, ...sources: U): T {
  for (const source of sources) {
    for (const [key, value] of Object.entries(source || {})) {
      target[key] = value && typeof value === 'object' && !Array.isArray(value) ? objectAssignDeep(structuredClone(target[key] || {}), value) : structuredClone(value);
    }
  }
  return target as T;
}

export { objectAssignDeep };
