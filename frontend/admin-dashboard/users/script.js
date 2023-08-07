window.onload = (async()=>[
    await
     fetchUsers()
])


const tableBody = document.querySelector('#tableBody')
const fetchUsers = async ()=>{
    let tableRow;
    const res = await fetch('http://localhost:5000/api/v1/users',{
        method:"GET",
        headers: {
            contentType:"application/json",
            'accept':'application/json'

        }
    })

    const data = await res.json()

    const users = data?.users

    users.map((user) => {

        tableRow += `
        <tr>
    <td>${user.userName}</td>
    <td>${user.email}</td>
    <td>${user.isAssigned}</td>
    <div class="actions">
    <td><button class="btn-update ${user.isAssigned}" ${user.isAssigned&&"disabled"}  >Update</button></td>
    <td><button class="btn-delete ${user.completed}">Delete</button></td>
    </div>
    </tr>
    `;
    tableBody.innerHTML = tableRow;

    })
}
