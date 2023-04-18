"use strict";
function fetchUser(id, username) {
    console.log(`Fetch user ${id} | username ${username}`);
}
function fetchLoggedInUser(...params) {
    fetchUser(...params);
}
fetchLoggedInUser(3, "Wario"); // OK
