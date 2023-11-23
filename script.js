
function authenticate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const encodedCredentials = btoa(username + ":" + password);

    fetch("LoginDetails.txt")
        .then(response => response.text())
        .then(data => {
            const lines = data.split("\n");
          

            for (var user of lines) {
                user = user.replace(/\r/g, '');
                
                if (btoa(user) === encodedCredentials) {
                    document.getElementById("message").innerHTML = "Authentication Successful";
                    return;
                }
            }
            document.getElementById("message").innerHTML = "Authentication Failed";
        });
}
