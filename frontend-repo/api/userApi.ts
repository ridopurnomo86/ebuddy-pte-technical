export async function getUserData() {
  const res = await fetch(`${process.env.backendUrl}/fetch-user-data`, {
    headers: {
      authorization: `Bearer ${process.env.userCookie}`,
    },
  });

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
