function validate() {
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let email = document.forms["myForm"]["email"].value;
    let phone = document.forms["myForm"]["phone"].value;

    if (fname == "" || !(/^[a-ö]*$/i.test(fname))) {
        if(fname == ""){
            alert("First name must be filled out");
        } else if (!(/^[a-ö]*$/i.test(fname))){
            alert("First name must only contain letters");
        }
        return false
    } 
    else if (lname == "" || !(/^[a-ö]*$/i.test(lname))){
        if (lname == ""){
            alert("Last name must be filled out") 
        } else if (!(/^[a-ö]*$/i.test(lname))){
            alert("Last name must only contain letters");
        }
        return false
    }
    else if (email == "" || (!(/\S+[@]\S+[.]\S+/.test(email)) || email.includes(" "))){
        if (email == ""){
            alert("Email must be filled out")
        } else if (!(/\S+[@]\S+[.]\S+/.test(email)) || email.includes(" ")){
            alert("Email must not contain spaces and follow the format xxxx@xxxx.xxx")
        }
        return false
    }
    else if (phone == "" || !(/^[0-9]*$/).test(phone)){
        if (phone == ""){
            //alert("Phone number must be filled out") // Add if phone number must be filled out.
            return true // Comment out if phone number must be filled out.
        } else if (!(/^[0-9]*$/).test(phone)){
            alert("Phone number must only contain numbers or be left empty")
        }
        return false
    }
  }