document.getElementById('efficiencyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const energy = parseFloat(document.getElementById('energyInput').value);
    const area = parseFloat(document.getElementById('areaInput').value);

    if (isNaN(energy) || isNaN(area) || energy <= 0 || area <= 0) {
        document.getElementById('result').innerHTML = '<p style="color:red;">Please enter valid positive numbers for both fields.</p>';
        return;
    }

    const efficiency = energy / area;
    document.getElementById('result').innerHTML = `<p>Your building's energy efficiency is <strong>${efficiency.toFixed(2)} kWh/m²</strong>.</p>`;
});
