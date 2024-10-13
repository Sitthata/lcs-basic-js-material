const pizzaPromise = new Promise((resolve, reject) => {
  const random = Math.random();
  const pizza = {
    size: "medium",
    toppings: ["cheese", "mushroom", "onion"],
  };

  if (random > 0.9) {
    resolve(pizza);
  } else {
    reject(new Error("No pizza found"));
  }
});

pizzaPromise
  .then((pizza) => {
    console.log(pizza);
  })
  .catch((error) => {
    console.error(error);
  });

// async function getPizza() {
//   try {
//     const pizza = await pizzaPromise;
//     console.log(pizza);
//   } catch (error) {
//     console.error(error);
//   }
// }

getPizza();