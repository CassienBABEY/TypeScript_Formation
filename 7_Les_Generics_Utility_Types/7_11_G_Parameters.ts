function fetchUser(id: number, username: string) {
    console.log(`Fetch user ${id} | username ${username}`)
}

type FetchUserParams = Parameters<typeof fetchUser>;

function fetchLoggedInUser(...params: FetchUserParams) {
    fetchUser(...params);
}

fetchLoggedInUser(3, "Wario"); // OK