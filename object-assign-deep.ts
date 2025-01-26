function objectAssignDeep(target: {}, ...sources: any[]): any {
  const _is = (value: any): boolean => {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  };
  for (const source of sources) {
    Object.entries(source || {}).forEach(([key, value]) => {
      const targetValue = (target as any)[key];
      (target as any)[key] = _is(value) ? objectAssignDeep(_is(targetValue) ? structuredClone(targetValue) : {}, value) : structuredClone(value);
    });
  }
  return target;
}

export { objectAssignDeep };
