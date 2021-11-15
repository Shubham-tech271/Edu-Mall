function validate(){
    var username=document.getElementById("username").value;
    var pasword=document.getElementById("password").value;
    var mobile=document.getElementById("Mobile").value;
    if(username!=''){
        if(password!=''){
            if(mobile!=''){
                alert('SignUp successfull');
                return false;
            }
            else{
                alert('Complete the form.')
            }
        }
    }
}
