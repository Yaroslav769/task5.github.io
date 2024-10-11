function isValidNumber(str) {
    return /^[1-9][0-9]*$/.test(str);
}

function calculateTotal(event) {
    event.preventDefault();

    const resultElement = document.getElementById("result");

    const priceValue = document.getElementById("product").value;
    const quantityValue = document.getElementById("quantity").value;

    let message;

    if (!priceValue) {
        message = "Пожалуйста, выберите продукт!";
    } else if (!isValidNumber(quantityValue)) {
        message = "Введите корректное количество (натуральное число)!";
    } else {
        const total = parseInt(priceValue) * parseInt(quantityValue);
        message = `Общая стоимость: ${total}`;
    }

    resultElement.textContent = message;
}

window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("btn");
    button.addEventListener("click", calculateTotal);
});