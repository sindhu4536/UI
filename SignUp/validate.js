function validateForm()
{
	//Regular expression for testing first name and last name
	var name = /^[A-Za-z0-9 ]{3,20}$/;
    var first_name=document.forms["form"]["fname"].value; 
    if (!name.test(first_name)) {
     alert("Name can't be blank");
    } 
    var last_name =document.forms["form"]["lname"].value;
    if(!name.test(last_name)){
    	alert("Name can't be blank");
    }
    //Regular expression for validating password
    var password = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
    var f_password =document.forms["form"]["password"].value;
    if(!password.test(f_password)){
    	alert("Enter a valid password");
    }
    //Regular expression for validating email address
    var email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var email_id = document.forms["form"]["email"].value;
    if(!email.test(email_id)){
    	alert("Enter a valid email address");
    }
    //Regular expression for validating phone number
    /*XXX-XXX-XXXX
      XXX.XXX.XXXX
      XXX XXX XXXX*/
    var phonenum =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var phoneno = document.forms["form"]["number"].value;
    if(!phonenum.test(phoneno)){
    	alert("Enter a valid phone number");
    }
    //validate the gender
    if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) ) 
   {
      alert ( "Please choose your Gender: Male or Female" ); 
      return false;
   }

 
    
}