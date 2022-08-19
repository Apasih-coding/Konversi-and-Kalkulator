function lengthConverter(source, valNum){
    valNum = parseFloat(valNum);
    var inputCm = document.getElementById("inputCm");
    var inputInches = document.getElementById("inputInches");
    var inputFeet = document.getElementById("inputFeet");
    var inputMeters = document.getElementById("inputMeters");
    var inputKilometer = document.getElementById("inputKilometer");
    var inputMiles = document.getElementById("inputMiles");
    var inputYards = document.getElementById("inputYards");

    if(source == "inputCm"){
        inputInches.value = (valNum*0.39370).toFixed(2);
        inputFeet.value = (valNum*0.032808).toFixed(3);
        inputMeters.value = (valNum/100).toFixed(3);
        inputKilometer.value = (valNum/100000).toFixed(6);
        inputMiles.value = (valNum*0.0000062137).toFixed(6);
        inputYards.value = (valNum*0.010936).toFixed(3);
    }
    if(source == "inputInches"){
        inputCm.value = (valNum/0.39370).toFixed(2);
        inputFeet.value = (valNum*0.083333).toFixed(3);
        inputMeters.value = (valNum/39.370).toFixed(3);
        inputKilometer.value = (valNum/39370).toFixed(6);
        inputMiles.value = (valNum*0.000015783).toFixed(6);
        inputYards.value = (valNum*0.027778).toFixed(3);
    }
    if(source == "inputFeet"){
        inputCm.value = (valNum/0.032808).toFixed();
        inputInches.value = (valNum*12).toFixed(2);
        inputMeters.value = (valNum/3.2808).toFixed(2);
        inputKilometer.value = (valNum/3280.8).toFixed(5);
        inputMiles.value = (valNum*0.00018939).toFixed(5);
        inputYards.value = (valNum*0.33333).toFixed(2);
    }
    if(source == "inputMeters"){
        inputCm.value = (valNum/0.01).toFixed();
        inputInches.value = (valNum*39.370).toFixed(2);
        inputFeet.value = (valNum*3.2808).toFixed(2);
        inputKilometer.value = (valNum/1000).toFixed(5);
        inputMiles.value = (valNum*0.00062137).toFixed(5);
        inputYards.value = (valNum*1.0936).toFixed(2);
    }
    if(source == "inputKilometer"){
        inputCm.value = (valNum*100000).toFixed();
        inputInches.value = (valNum*39370).toFixed();
        inputFeet.value = (valNum*3280.8).toFixed();
        inputMeters.value = (valNum*1000).toFixed();
        inputMiles.value = (valNum*0.62137).toFixed(2);
        inputYards.value = (valNum*1093.6).toFixed();
    }
    if(source == "inputMiles"){
        inputCm.value = (valNum/0.0000062137).toFixed();
        inputInches.value = (valNum*63360).toFixed();
        inputFeet.value = (valNum*5280).toFixed();
        inputMeters.value = (valNum/0.00062137).toFixed();
        inputKilometer.value = (valNum/0.62137).toFixed(2);
        inputYards.value = (valNum*1760).toFixed();
    }
    if(source == "inputYards"){
        inputCm.value = (valNum/0.010936).toFixed();
        inputInches.value = (valNum*36).toFixed();
        inputFeet.value = (valNum*3).toFixed();
        inputMeters.value = (valNum/1.0936).toFixed(2);
        inputKilometer.value = (valNum/1093.6).toFixed(5);
        inputMiles.value = (valNum*0.00056818).toFixed(5);
    }
}