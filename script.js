// finding html elements
const form = document.getElementById("form");
const marks = document.getElementsByClassName("mark");
const totalMark = document.getElementById("totalMark");
const TotalGrade = document.getElementById("grade");
const totalPass = document.getElementById("totalPass");
const totalFail = document.getElementById("totalFail");
const gradePoint = document.getElementById("gradePoint");

// Submit mark
const submitMark=(event)=>
{
    event.preventDefault();
    let grade=0;
    let avg;
    let mark;
    let f=0;
    let p=0;
    let sum=0;
    for(let i=0;i<marks.length;i++)
    {
        mark=marks[i].value;
        sum+=parseFloat(mark);
        if(mark<40){f++;}
        else if(mark>=40 && mark<45){grade+=2;p++;}
        else if(mark>=45 && mark<50){grade+=2.25;p++;}
        else if(mark>=50 && mark<55){grade+=2.5;p++;}
        else if(mark>=55 && mark<60){grade+=2.75;p++;}
        else if(mark>=60 && mark<65){grade+=3;p++;}
        else if(mark>=65 && mark<70){grade+=3.25;p++;}
        else if(mark>=70 && mark<75){grade+=3.5;p++;}
        else if(mark>=75 && mark<80){grade+=3.75;p++;}
        else if(mark>=80){grade+=4;p++;}
    }
    // result
    totalMark.innerHTML = sum;
    totalPass.innerHTML = p;
    totalFail.innerHTML = f;
    avg = grade/8;
    gradePoint.innerHTML = avg;
    if(f!=0)
    {
        TotalGrade.innerHTML = "F";
    }
    else
    {
        if(avg>=2.00 && avg<2.25){grade="D";}
        else if(avg>=2.25 && avg<2.5){grade="C";}
        else if(avg>=2.5 && avg<2.75){grade="C+";}
        else if(avg>=2.75 && avg<3){grade="B-";}
        else if(avg>=3 && avg<3.25){grade="B+";}
        else if(avg>=3.25 && avg<3.5){grade="A-";}
        else if(avg>=3.5 && avg<3.75){grade="A";}
        else{grade="A";}
        TotalGrade.innerHTML = grade;
    }
}


// add Event listener
form.addEventListener("submit",submitMark);