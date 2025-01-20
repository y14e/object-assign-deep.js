function objectAssignDeep<T extends Record<string, any>, U extends Record<string, any>[]>(target: T, ...sources: U): T & U[number] {
  for (const source of sources) {
    for (const [key, value] of Object.entries(source || {})) {
      (target as Record<string, any>)[key] = value && typeof value === 'object' && !Array.isArray(value) ? objectAssignDeep(structuredClone(target[key] || {}), value) : structuredClone(value);
    }
  }
  return target as T & U[number];
}

export { objectAssignDeep };
