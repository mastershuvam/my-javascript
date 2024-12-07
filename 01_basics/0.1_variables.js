const accountName = 144553; // `const` since it won't change
let accounEmail = "shuvam@gmail.com"; // `let` because it is reassigned
var accountPassword = "12345"; // `var` is okay but `let` is preferred
let accountCity = "DubrajPur"; // Declare `accountCity` properly

// accountName = 2; // Uncommenting this will throw an error
accounEmail = "hc@email.com";
accountCity = "bengaluru";

console.table([accountName,accounEmail, accountPassword, accountCity]);
