// this function is called when the user submits a form using the onclick event
// when the submit button is clicked it executes the function with an argument of the form itself
function formValidation(form) {   
    // These variables extract the data from the form fields
    var firstname = form.fname;
    var lastname = form.lname;
    var email = form.email;
    var subject = form.subject;

    // executes function below formValidation()
    changeBorder(firstname, lastname, email, subject);    

    // alerts user and changes text box border colour to red
    // checks if any of the form fields are empty before being executed
    if(firstname.value == "" || lastname.value == "" || email.value == "" || subject.value == "") {
        // if a form field is empty, it sets the borderColor of each text field to red, denoting that there is an error
        // it also displays an error message under the text field
        // this is hidden if the text field is not empty.
        // the same process is done throughout all text fields.
        if(firstname.value == "") {
            firstname.style.borderColor = "#de3826";
            document.getElementById("errorfname").style.display = "block";
        }
        else {
            document.getElementById("errorfname").style.display = "none";
        }
        
        if(lastname.value == "") {
            lastname.style.borderColor = "#de3826";
            document.getElementById("errorlname").style.display = "block";
        }
        else {
            document.getElementById("errorlname").style.display = "none";
        }
        
        if(email.value == "") {
            email.style.borderColor = "#de3826";
            document.getElementById("errormail").style.display = "block";
        }
        else {
            document.getElementById("errormail").style.display = "none";  
        }
        
        if(subject.value == "") {
            subject.style.borderColor = "#de3826";
            document.getElementById("errorsub").style.display = "block";
        }
        else {
            document.getElementById("errorsub").style.display = "none";
        }

        // returns false - stops the function as the data is invalid
        return false;
    }
    else {
        // this simply resets everything
        // hardcoded fix to an issue where the error messages would not be hidden if the data is valid
        document.getElementById("errorfname").style.display = "none";        
        document.getElementById("errorlname").style.display = "none";        
        document.getElementById("errormail").style.display = "none";          
        document.getElementById("errorsub").style.display = "none";
        // submits the form after all criteria has been met
        form.submit();
    }
}

// this is executed before validation as it attaches an event listener when an error has been made

// This implementation is not good - as it adds an event listener to all fields instead of the field that contains invalid data
// it would be best to add eventListeners in the if statements above in formValidation() where validation fails
// sadly JS does not have any function/method overloading, any other alternative implementation is inoptimal
// this solution is just "good enough"
function changeBorder(fnamebox, lnamebox, emailbox, subjectbox) {
    // an onclick event listener is added to the text field on the form, and executes lines of code if the field has been clicked
    // instructions for when a click occurs are defined with "event =>" which is just a simple lambda expression
    // much more efficient than defining another function
    // when the user clicks on the text field with a border color of red, it reverts back to its original grey state.
    fnamebox.addEventListener("click", event => {
        fnamebox.style.borderColor = "#ccc";
    });
    
    lnamebox.addEventListener("click", event => {
        lnamebox.style.borderColor = "#ccc";
    });
    
    emailbox.addEventListener("click", event => {
        emailbox.style.borderColor = "#ccc";
    });
    
    subjectbox.addEventListener("click", event => {
        subjectbox.style.borderColor = "#ccc";
    });

}
