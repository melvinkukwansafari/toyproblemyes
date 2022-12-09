//had to call the function studentMarks
function  studentMarks () {f
    marks = Number(document.getElementsByName('inputfield')[0].value)
    if (marks >= 79) {
        alert("You got A");
    }
    else if (marks>=69) {
        alert("You got B")
    }
    else if (marks>=59) {
        alert("You got C")
    }
    else if (marks>=49) {
        alert("You got D")
    }
    else if (marks>=39) {
        alert("You got E")
    }

    else {
        alert("You Failed");
    }
}