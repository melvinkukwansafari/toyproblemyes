//had to calculate the demerit speed by 5 to get demerit points
function  carLicense () {
    speed = Number(document.getElementsByName('inputfield')[0].value)
    if (speed <= 70) {
        alert("Okay");
    }
   //had to put another if stament inside the else as an argument above a speed of 70 

    else { 
        demerits = (speed-70)/5
        if (speed > 70) {
            alert ((speed-70)/5);

        }
        
        
    }
}