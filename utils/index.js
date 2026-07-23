export const getCases = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/cases`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch cases");
  }
  const json = await res.json();

  return json.data;
};
