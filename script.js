document.getElementById('atm-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cardNumber = document.getElementById('card-number').value;
    const pin = document.getElementById('pin').value;

    // Basic validation
    if (cardNumber === '1234567812345678' && pin === '1234') {
        document.getElementById('message').textContent = 'Login Successful! Welcome!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Invalid Card Number or PIN.';
        document.getElementById('message').style.color = 'red';
    }
});
