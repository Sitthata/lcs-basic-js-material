// destructuring-exercise.js

/**
 * Destructuring Exercise Lab
 * 
 * This lab provides a complex object and several functions where you can practice
 * different destructuring techniques in JavaScript. Complete each function by
 * destructuring the necessary parts of the `userProfile` object.
 */

// Complex object to work with
const userProfile = {
    id: 101,
    personalInfo: {
        name: {
            first: "John",
            last: "Doe"
        },
        contact: {
            email: "john.doe@example.com",
            phone: "555-1234"
        },
        addresses: [
            {
                type: "home",
                address: "123 Main St",
                city: "Anytown",
                zip: "12345"
            },
            {
                type: "work",
                address: "456 Corporate Blvd",
                city: "Metropolis",
                zip: "67890"
            }
        ]
    },
    preferences: {
        notifications: {
            email: true,
            sms: false
        },
        themes: ["dark", "solarized"]
    },
    posts: [
        { id: 1, title: "Hello World", content: "This is my first post" },
        { id: 2, title: "Destructuring in JS", content: "Let's learn about destructuring." }
    ]
};

/**
 * Exercise 1:
 * Destructure the first and last name from userProfile and return them as an object.
 */
function getUserName() {
    // Your code here
    // Example:
    // const { personalInfo: { name: { first, last } } } = userProfile;
    // return { first, last };
}

/**
 * Exercise 2:
 * Destructure the email and phone from userProfile and return them as an object.
 */
function getContactInfo() {
    // Your code here
}

/**
 * Exercise 3:
 * Destructure the home address from userProfile and return the city and zip as an object.
 */
function getHomeAddress() {
    // Your code here
}

/**
 * Exercise 4:
 * Destructure the second theme from preferences and return it.
 */
function getSecondTheme() {
    // Your code here
}

/**
 * Exercise 5:
 * Destructure the title of the second post and return it.
 */
function getSecondPostTitle() {
    // Your code here
}

/**
 * Bonus Exercise:
 * Use destructuring to extract all information and return it in a formatted object.
 */
function getFormattedProfile() {
    // Your code here
}

export {
    getUserName,
    getContactInfo,
    getHomeAddress,
    getSecondTheme,
    getSecondPostTitle,
    getFormattedProfile
}