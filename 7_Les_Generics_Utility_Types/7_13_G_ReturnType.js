"use strict";
function fetchUser(id, username) {
    return {
        id,
        username
    };
}
function fetchLoggedInUser(...params) {
    const memberData = fetchUser(...params);
    console.log(memberData);
    let user = memberData;
    console.log(user);
}
fetchLoggedInUser(3, "Wario"); // OK
