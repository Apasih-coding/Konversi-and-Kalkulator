<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nilai Tukar</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/0b136bf0ad.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class="card-currency">
        <div class="judul">Nilai Tukar</div>
        <form action="#">
            <div class="input-amount">
                <div class="text">Input Amount :</div>
                <div class="form-amount">
                    <input type="number" name="amount" value="1">
                </div>
            </div>
            <div class="from-list">
                <div class="from">
                    <p>From</p>
                    <div class="select-box">
                        <img src="https://countryflagsapi.com/png/us" alt="">
                        <select></select>
                    </div>
                </div>
                <i class="fa-solid fa-right-left"></i>
                <div class="to">
                    <p>To</p>
                    <div class="select-box">
                        <img src="https://countryflagsapi.com/png/id" alt="">
                        <select></select>
                    </div>
                </div>
            </div>
            <div class="results">Getting exchange rate...</div>
            <button>Get Result</button>
        </form>
    </div>

    <script src="js/country-list.js"></script>
    <script src="js/script.js"></script>
</body>

</html>