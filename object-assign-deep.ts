function objectAssignDeep<T extends Record<string, any>>(target: T, ...sources: Record<string, any>[]): T {
  for (const source of sources) {
    for (const [key, value] of Object.entries(source || {})) {
      (target as Record<string, any>)[key] = value && typeof value === 'object' && !Array.isArray(value) ? objectAssignDeep(structuredClone(target[key] || {}) as Record<string, any>, value) : structuredClone(value);
    }
  }
  return target as T;
}

export { objectAssignDeep };
