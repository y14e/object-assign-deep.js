function objectAssignDeep<T extends Record<string, any>, S extends Record<string, any>>(target: T, source: S): T & S {
  for (const [key, value] of Object.entries(source)) {
    (target as Record<string, any>)[key] = value && typeof value === 'object' && !Array.isArray(value) ? objectAssignDeep(structuredClone(target[key] || {}), value) : structuredClone(value);
  }
  return target as T & S;
}

export { objectAssignDeep };
