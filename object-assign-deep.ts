function objectAssignDeep(target: {}, ...sources: any[]): any {
  for (const source of sources) {
    for (const [key, value] of Object.entries(source || {})) {
      (target as any)[key] = value && typeof value === 'object' && !Array.isArray(value) ? objectAssignDeep(structuredClone((target as any)[key] || {}), value) : structuredClone(value);
    }
  }
  return target;
}

export { objectAssignDeep };
