const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const projectId = urlParams.get('id');
const projectContainer = document.querySelector('.projectContainer')
const checkbox1 = document.querySelector('#checkbox1')
const checkbox2 = document.querySelector('#checkbox2')
const checkbox3 = document.querySelector('#checkbox3')
console.log(checkbox1 , checkbox2 , checkbox3) 
const completeBtn = document.querySelector('#completeBtn')
const tasks = document.querySelector('.tasks')
const profileName = document.querySelector('.profileName')

let userId = ''

window.onload = async () => {
    await fetchAssignedProject();
    await getLoggedInUser()
}

const getLoggedInUser = async () => {
    // getuser by id
    
    const res = await fetch(`http://localhost:5000/api/v1/users/${userId}`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'accept': 'application/json',
        }

    })

    
    
    const data = await res.json()
    const user = data?.user[0];
    profileName.innerHTML = user.userName
}


let html =``

const fetchAssignedProject = async () => {
const res = await fetch(`http://localhost:5000/api/v1/users/getProjectAssigned/${projectId}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
})
const data = await res.json();

const project = await data?.project;

userId = project.user_Id;

// console.log(userId)

if(project){
    
    html = `
    <div class="project">
    <h5 class="name">${project.project_name}</h5>
    <p class="desc">${project.project_description}</p>
    <p class="deadline">Deadline : ${project.deadline}</p>
    </div>
    `
    projectContainer.innerHTML = html;


}
else{

    html = `
    <h5 class="name">Currently, you have no project assigned.</h5>
    `
    projectContainer.innerHTML = html;
}
}

// Making sure that all the three tasked are checked meaning completed for the completeBtn to be clickable


let completedTasks = 0

checkbox1?.addEventListener('click', () => {
    if(checkbox1.checked){
        completedTasks++
    }else{
        completedTasks--
    }
    if(completedTasks === 3){
        completeBtn.classList.remove('btn-disabled')
        completeBtn.classList.add('btn-primary')
    }
    else{
        completeBtn.classList.remove('btn-primary')
        completeBtn.classList.add('btn-disabled')
    }
})

checkbox2?.addEventListener('click', () => {
    if(checkbox2.checked){
        completedTasks++
    }else{
        completedTasks--
    }
    if(completedTasks === 3){
        completeBtn.classList.remove('btn-disabled')
        completeBtn.classList.add('btn-primary')
    }
    else{
        completeBtn.classList.remove('btn-primary')
        completeBtn.classList.add('btn-disabled')
    }
})

checkbox3?.addEventListener('click', () => {
    if(checkbox3.checked){
        completedTasks++
    }else{
        completedTasks--
    }
    if(completedTasks === 3){
        completeBtn.classList.remove('btn-disabled')
        completeBtn.classList.add('btn-primary')
    }else{
        completeBtn.classList.remove('btn-primary')
        completeBtn.classList.add('btn-disabled')
    }
})






