const dnsUrl = 'http://localhost:3001/'

document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const submitButton = document.getElementById('submitButton');
    const resultLabel = document.getElementById('resultLabel');

    submitButton.addEventListener('click', function() {
        const inputValue = inputText.value;
        console.log('inputVAlue', inputValue)
        axios.post(dnsUrl, {
            site: inputValue
        })
        .then(function (response) {
            resultLabel.textContent = 'Result: ' + response.data;
        })
        .catch(function (error) {
            resultLabel.textContent = 'Error: ' + error.message;
        });
    });
});
