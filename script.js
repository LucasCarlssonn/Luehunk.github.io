
function validate(skip) {
    const ERROR_STYLE = "border-color: red";

    let valid = true;

    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let email = document.forms["myForm"]["email"].value;

    
    document.getElementById("fname_error").innerHTML = "";
    document.getElementById("lname_error").innerHTML = "";
    document.getElementById("email_error").innerHTML = "";
    document.getElementById("question1_error").innerHTML = "";
    document.getElementById("question2_error").innerHTML = "";
    document.getElementById("question3_error").innerHTML = "";
    document.getElementById("fname").style = "default";
    document.getElementById("lname").style = "default";
    document.getElementById("email").style = "default";
    document.getElementById("question1").style = "border-color: red"


 
    if(fname == ""){
        document.getElementById("fname_error").innerHTML = "First name must be filled out";
        document.getElementById("fname").style = ERROR_STYLE;
        valid = false;
    } else if (!(/^[a-ö]*$/i.test(fname))){
        document.getElementById("fname_error").innerHTML = "First name must only contain letters";
        document.getElementById("fname").style = ERROR_STYLE;
        valid = false;
    }
    if (lname == ""){
        document.getElementById("lname_error").innerHTML = "Last name must be filled out";
        document.getElementById("lname").style = ERROR_STYLE;
        valid = false;
    }
    else if (!(/^[a-ö]*$/i.test(lname))){
        document.getElementById("lname_error").innerHTML = "Last name must only contain letters";
        document.getElementById("lname").style = ERROR_STYLE;
        valid = false;
    }
    if (email == ""){
        document.getElementById("email_error").innerHTML = "Email must be filled out";
        document.getElementById("email").style = ERROR_STYLE;
        valid = false;
    }
    else if (!(/\S+[@]\S+[.]\S+/.test(email)) || email.includes(" ")){
        document.getElementById("email_error").innerHTML = "Email must not contain spaces and follow the format xxxx@xxxx.xxx";
        document.getElementById("email").style = ERROR_STYLE;
        valid = false;
    }
    
    
    if (!checkbox.includes(true)){
        document.getElementById("question1_error").innerHTML = "Please fill in question 1";
        valid = false;
        
    }
    if (radio == ""){
        document.getElementById("question2_error").innerHTML = "Please fill in question 2";
        valid = false;
    }
    if (text == ""){
        document.getElementById("question3_error").innerHTML = "Please fill in question 3";
        valid = false;
    }
    if (!valid){
        return false;
    }
    
    if (!skip){
        let score = calculateScore();
        alert("Your score " + score + "/4 points was submitted");
    }
    return true;
}

function showResult(){
    const valid = validate(true);
    if (!valid){
        return
    }
    let score = calculateScore();

    document.getElementById("score").innerHTML = "You scored " + score + "/4 points";
    document.getElementById("score").style.display = "block";


    // Disables questions so that you can not change answers after getting result
    const question1 = document.getElementsByName("question1");
    for (let i = 0; i < question1.length; i++){
        question1[i].setAttribute("disabled", "true")
    }
    
    const question2 = document.getElementsByName("question2");
    for (let i = 0; i < question2.length; i++){
        question2[i].setAttribute("disabled", "true")
    }
    
    document.getElementById("question3").setAttribute("disabled", "true")

    document.getElementById("correct1").innerHTML = "Correct answer is Italy and Germany."
    document.getElementById("correct2").innerHTML = "Correct answer is 1939."
    document.getElementById("correct3").innerHTML = "Correct answer is Paris."
    document.getElementById("submit").style.display = "inline-block";
}

function calculateScore(){
    let score = 0;
    let radio = document.forms["myForm"]["question2"].value;
    let text = document.forms["myForm"]["question3"].value;
    let checkbox = [];
    for (let i = 0; i < 3; i++){
        checkbox.push(document.forms["myForm"]["question1"][i].checked)
    }
    if (radio == 1){
        score += 1;
    }
        
    if (checkbox[0] && !checkbox[1] && checkbox[2]){
        score += 2;
    } else if ((checkbox[0] || checkbox[2]) && !checkbox[1]){
        score += 1;
    }
    
    if (/^paris$/i.test(text)){
        score += 1
    }
    return score;

};