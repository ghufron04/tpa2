function bmi(){
    let berat = document.getElementById("w").value
    let tinggi = document.getElementById("h").value

    let total = berat/ (tinggi / 100)**2;
    var total2=(total.toFixed(1));
    let hasil = "";

    if(total < 18.5){
        hasil = "underweight";
    }else if(total > 17.5 && total < 24.9){
        hasil = "normal weight";
    }else if(total > 25 && total < 29.9){
        hasil = "overweight";
    }else{
        hasil = "obesity";
    }

    document.getElementById("result").innerHTML = "Your BMI is <b>"+ total2 + "</b> and you are <b>"+ hasil +"</b>";
}