function inflationCalculator() {
    // Uzimanje vrijednosti iz input polja koristeći querySelector
    const inflationRate = parseFloat(document.querySelector('#inflationRate').value);
    const money = parseFloat(document.querySelector('#money').value);
    const years = parseInt(document.querySelector('#years').value, 10);

    // Dohvaćanje div-a za prikaz poruke
    const resultDiv = document.querySelector('#result');

    // Inicijalno sakrij div ako je bio vidljiv
    resultDiv.style.display = 'none';

    // Validacija unosa
    if (isNaN(inflationRate) || inflationRate <= 0) {
        resultDiv.innerText = 'Molimo unesite validnu stopu inflacije.';
        resultDiv.style.display = 'block'; // Prikazivanje div-a
        return;
    }
    if (isNaN(money) || money <= 0) {
        resultDiv.innerText = 'Molimo unesite validan iznos novca.';
        resultDiv.style.display = 'block'; // Prikazivanje div-a
        return;
    }
    if (isNaN(years) || years <= 0) {
        resultDiv.innerText = 'Molimo unesite validan broj godina.';
        resultDiv.style.display = 'block'; // Prikazivanje div-a
        return;
    }

    // Izračun inflacije
    const futureValue = money * Math.pow((1 + inflationRate / 100), years);

    // Prikaz rezultata u div-u
    resultDiv.innerText = `Za ${years} godina, €${money.toFixed(2)} će vrijediti približno €${futureValue.toFixed(2)} pri stopi inflacije od ${inflationRate.toFixed(2)}%.`;
    resultDiv.style.display = 'block'; // Prikazivanje div-a
}
