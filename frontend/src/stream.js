$(window).on("hashchange", function() {
    if(location.hash.slice(1)== "signup") {
        $(".page").addClass("extend");
        $("#login").removeClass("active");
        $("#signup").addClass("active");
    } else {
        $(".page").addClass("extend");
        $("#login").removeClass("active");
        $("#signup").addClass("active");
    }
});
$(window).trigger("hashchange");

function validateLoginForm() {
    var name = document.getElementById("logName").Value;
    var password = document.getElementById("logPassword").Value;

    if(name == "" || password == "") {
        document.getElementById("errorMsg").innerHTML = "please fill the required fields"
        return false;
    }

    else if (password.length < 8) {
        document.getElementById("errorMsg").innerHTML = "Your password must be include at least 8 characters"
        return false;
    }
    else {
        alert("Successfully logged in!");
        return true;
    }
} 
    function validateSignupForm() {
        var mail = document.getElementById("signEmail").Value;
        var name = document.getElementById("signName").Value;
        var password = document.getElementById("signPassword").value;

        if(mail == "" || name == "" || password == "") {
            document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
            return false;
        }

        else if(password.length < 8) {
            document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
            return false;
        }
        else {
            alert("Successfully signed up!");
            return true;
        }
    }


function main() {
    document.getElementById('login');
    window.location.href = 'main.html';
    
    loginEl == ''
}    