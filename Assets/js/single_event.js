

document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', () => {
    const eventId = card.getAttribute('data-id');
    console.log('Clicked card ID:', eventId);
    });
});

let selectedPrice = 0;

function showCard(type) {
    document.querySelectorAll('.pricing-card').forEach(card => card.classList.add('hidden'));
    document.getElementById(`${type}-card`).classList.remove('hidden');
}

function logCardInfo(type, price) {
    selectedPrice = price;

    // Set modal content
    document.getElementById("modal-class").innerText = `Class: ${type}`;
    document.getElementById("modal-price").innerText = `Price per ticket: Ksh ${price.toLocaleString()}`;
    document.getElementById("ticket-quantity").value = 1;
    document.getElementById("total-price").innerText = price.toLocaleString();

    // Show modal
    document.getElementById("ticket-modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("ticket-modal").classList.add("hidden");
}

function updateTotalPrice() {
    const quantity = parseInt(document.getElementById("ticket-quantity").value) || 1;
    const total = selectedPrice * quantity;
    document.getElementById("total-price").innerText = total.toLocaleString();
}