export const createDictionary = <T extends Record<string, string>>(
    dict: T,
): Record<string, string> =>
    Object.fromEntries(Object.entries(dict).map(([key, value]) => [value, key]));
