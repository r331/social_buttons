export default function generateLinkFor(
  baseLink: string,
  object: {
    [key: string]: string | number | undefined | null;
  },
) {
  const params = Object.entries(object)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
    );

  const parameters = params.length > 0 ? `?${params.join('&')}` : '';
  return baseLink + parameters;
}
