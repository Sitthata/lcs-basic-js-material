const BASE_URL = "https://jsonplaceholder.typicode.com";

function delay(timeMillis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeMillis);
  });
}

async function main() {
  let localPosts = [];

  // For demonstration ONLY
  async function getPosts() {
    try {
      const response = await fetch(`${BASE_URL}/posts`);

      await delay(2000);

      return response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  
  console.log("LOADING....");
  localPosts = await getPosts();
  console.log(localPosts);
}

main();
