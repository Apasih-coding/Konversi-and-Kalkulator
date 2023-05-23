<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calc</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/0b136bf0ad.js" crossorigin="anonymous"></script>
    <script src="js/script.js" defer></script>
</head>

<body>
    <div class="card-calc">
        <div class="input-value">
            <div data-prev-operand class="prev-operand"></div>
            <div data-current-operand class="current-operand"></div>
        </div>
        <div class="menu">
            <div class="button-left">
                <button data-all-clear>AC</button>
                <button data-operation>%</button>
                <button data-delete>Del</button>
                <button data-number>7</button>
                <button data-number>8</button>
                <button data-number>9</button>
                <button data-number>4</button>
                <button data-number>5</button>
                <button data-number>6</button>
                <button data-number>1</button>
                <button data-number>2</button>
                <button data-number>3</button>
                <button data-number>0</button>
                <button data-number>00</button>
                <button data-number>.</button>
            </div>
            <div class="button-right">
                <button data-operation>/</button>
                <button data-operation>*</button>
                <button data-operation>-</button>
                <button data-operation>+</button>
                <button data-equals>=</button>
            </div>
        </div>
    </div>
</body>

</html>