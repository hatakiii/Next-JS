export async function fetcher(path: string) {
  const data = await fetch(`https://dev.to/api${path}`).then((res) =>
    res.json()
  );
  return data;
}
