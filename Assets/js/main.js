const dropdown = document.getElementById("eventFilter");
const cards = document.querySelectorAll(".event-card");

dropdown.addEventListener("change", () => {
    const selected = dropdown.value;
    cards.forEach(card => {
    const categories = card.dataset.category.split(" ");
    if (selected === "all" || categories.includes(selected)) {
        card.classList.remove("hidden");
    } else {
        card.classList.add("hidden");
    }
    });
});

document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', () => {
    const eventId = card.getAttribute('data-id');
    console.log('Clicked card ID:', eventId);
    });
});