document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const productSelect = document.getElementById("product");
    const quantityInput = document.getElementById("quantity");
    const resultElement = document.getElementById("result");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        calculateTotal();
    });

    function isValidNumber(value) {
        return /^[1-9]\d*$/.test(value);
    }

    function calculateTotal() {
        const price = productSelect.value;
        const quantity = quantityInput.value;

        if (!price) {
            resultElement.textContent = "Пожалуйста, выберите продукт!";
            return;
        }

        if (!isValidNumber(quantity)) {
            resultElement.textContent = "Введите корректное количество!";
            return;
        }

        const total = parseInt(price, 10) * parseInt(quantity, 10);
        resultElement.textContent = `Общая стоимость: ${total}`;
    }
});
