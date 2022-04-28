var submit = document.getElementById("submit");

submit.addEventListener("click", function BMI() {
    var weight = Number(document.getElementById("weight").value);
    var height = Number(document.getElementById("height").value);
    var all = weight / (height * height);
    alert(all);

    if (all <= 18.5) {
        alert("چرا اینقدر لاغری");
    } else if (all <= 25) {
        alert("دمت گرم که ایده آلی");
    } else if (all <= 30) {
        alert("وزنت بالاست")
    } else if (all <= 35) {
        alert("خدایی خیلی چاقی");
    } else {
        alert("مقادیر اشتباه وارد شده است");
    }

})
BMI();