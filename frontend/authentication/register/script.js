
const regForm = document.querySelector("#registerForm");
console.log(regForm);

const alerts = document.querySelector(".alerts");



// User Registration

const username = document.querySelector('.username')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const password2 = document.querySelector('.password2')
const form = document.querySelector('.form')



let user = {

};

const checkRegisterInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
        if(usernameValue.length == 0 || emailValue.length ==0 || passwordValue.length ==0) {
        alerts.innerHTML = "Please fill in all fields"
        }else{
        if (passwordValue !== password2Value) {
            alert.innerHTML = "Passwords do not match";

        }else{

            user = {
                username: username.value,
                email: email.value,
                password: password.value,
    
            }
        }
    }
}


regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    checkRegisterInputs();
    try {

        const res = await fetch('http://localhost:5000/api/v1/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'


            },
            body: JSON.stringify(user)
          })

          const data = await res.json()
          alerts.innerHTML = data?.message??'something went wrong';
          window.location.href = "../login/login.html"
        
    } catch (error) {
        console.log(error)
        
    }

});






