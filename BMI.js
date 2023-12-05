

function calculateBmi() {
    let weight= document.getElementById('weight').value
    let height= document.getElementById('height').value

    let bmi= weight / (height * height)
    Math.round(bmi, 2)

    document.getElementById('heading').innerHTML = 'Your BMI is: '
    document.getElementById('bmi-output').innerHTML = bmi
}
