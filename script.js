// Simulated bot data (replace with actual data from your server)
const botData = [
    { name: "Bot 1", id: "123456789" },
    { name: "Bot 2", id: "987654321" }
];

document.addEventListener("DOMContentLoaded", () => {
    const createBotButton = document.getElementById("create-bot");
    const botList = document.getElementById("bot-list");

    createBotButton.addEventListener("click", () => {
        // Implement bot creation logic here
        alert("Bot creation functionality to be added.");
    });

    // Populate the bot list (replace with actual data from your server)
    botData.forEach((bot) => {
        const listItem = document.createElement("li");
        listItem.textContent = bot.name;
        botList.appendChild(listItem);
    });
});
