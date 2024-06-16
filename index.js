import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence to Count the Word:"
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`There are ${words.length} words in your sentence.`);
