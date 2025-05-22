  document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault();
            
            // Valid credentials (replace with your actual authentication logic)
            const validEmail = "user@snd.com";
            const validPassword = "gwapo123";
            
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const errorMessage = document.getElementById("error-message");
            
            errorMessage.textContent = "";
            
            if (email === validEmail && password === validPassword) {
                // Redirect to text.html on successful login
                window.location.href = "egos.html";
            } else {
                errorMessage.textContent = "Invalid email or password";
            }
        });