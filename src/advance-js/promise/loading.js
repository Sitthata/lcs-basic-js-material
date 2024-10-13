const getUser = new Promise((resolve, reject) => {
  const users = [
    { name: "John Doe", age: 25 },
    { name: "Jane Doe", age: 26 },
    { name: "Jack Doe", age: 27 },
  ];
  setTimeout(() => {
    // resolve(users);
    reject("Failed to fetch users");
  }, 2000);
});

// getUser
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

let localUsers = [];

// Bad Code
function fetchUser() {
  try {
    const userData = getUser;
    return userData;
  } catch (error) {
    console.error(error);
  }
}

// Aysnc Await
async function demonstrate() {
  console.log("Before: ", localUsers);
  console.log("loading users...");

  localUsers = await fetchUser();

  console.log("After: ", localUsers);
  console.log("Finished loading users...");
}

demonstrate();
