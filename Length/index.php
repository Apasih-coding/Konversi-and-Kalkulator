<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Konversi Panjang</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="card-length">
        <div class="judul">Konversi Panjang</div>
        <div class="input-value">
            <label for="inputCm">CM:</label>
            <input type="number" id="inputCm" placeholder="Sentimeters" oninput="lengthConverter(this.id, this.value)" onchange="lengthConverter(this.id, this.value)">
        </div>
        <div class="input-value">
            <label for="inputInches">Inches:</label>
            <input type="number" id="inputInches" placeholder="Inches" oninput="lengthConverter(this.id, this.value)" onchange="lengthConverter(this.id, this.value)">
        </div>
        <div class="input-value">
            <label for="inputFeet">Feet:</label>
            <input type="number" id="inputFeet" placeholder="Feet" oninput="lengthConverter(this.id, this.value)" onchange="lengthConverter(this.id, this.value)">
        </div>
        <div class="input-value">
            <label for="inputMeters">Meters:</label>
            <input type="number" id="inputMeters" placeholder="Meters" oninput="lengthConverter(this.id, this.value)" onchange="lengthConverter(this.id, this.value)">
        </div>
        <div class="input-value">
            <label for="inputKilometer">KM:</label>
            <input type="number" id="inputKilometer" placeholder="Kilometers" oninput="lengthConverter(this.id, this.value)" onchange="lengthConverter(this.id, this.value)">
        </div>
        <div class="input-value">
            <label for="inputMiles">Miles:</label>
            <input type="number" id="inputMiles" placeholder="Miles" oninput="lengthConverter(this.id, this.value)" onchange="lengthConverter(this.id, this.value)">
        </div>
        <div class="input-value">
            <label for="inputYards">Yards:</label>
            <input type="number" id="inputYards" placeholder="Yards" oninput="lengthConverter(this.id, this.value)" onchange="lengthConverter(this.id, this.value)">
        </div>
    </div>
    <script src="js/script.js"></script>
</body>

</html>