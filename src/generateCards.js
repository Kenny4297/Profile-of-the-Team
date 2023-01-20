const createManagerCards = () => {
    let listOfManagers = []

    managerData.forEach(data => {
        let card = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h2>${data.name}</h2>
                <h3>${data.role}</h3>
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item1">Id: <span id="id-number">${data.id}</span> </li>
                    <li class="list-group-item2">Email: <span id="email">${data.email}</span></li>
                    <li class="list-group-item3">Office Number: <span id="office-number">${data.officeNumber}</span></li>
                </ul>
        </div>
        `
        listOfManagers.push(card);
        console.log(listOfManagers);
    })
};

exports = { createManagerCards };




const createEngineerCard = () => {
    engineerData.forEach(data => {
        console.log(`228: The 'data' for each variable is ${data}`)
        let generatedRow = document.createElement("div");
            generatedRow.setAttribute("class", "generated-row");

            generatedRow.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h2>${data.employeeName}</h2>
                    <h3>${data.role}</h3>
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item1">Id: <span id="id-number">${data.id}</span> </li>
                        <li class="list-group-item2">Email: <span id="email">${data.email}</span></li>
                        <li class="list-group-item3">Office Number: <span id="github-username">${data.gitHubUsername}</span></li>
                    </ul>
            </div>
        `
        document.querySelector(".engineer").appendChild(generatedRow);
    })
}

const createInternCard = () => {
    let listOfInterns = [];
    internData.forEach(data => {
        let generatedRow = document.createElement("div");
            generatedRow.setAttribute("class", "generated-row");

            generatedRow.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h2>${data.employeeName}</h2>
                    <h3>${data.role}</h3>
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item1">Id: <span id="id-number">${data.id}</span> </li>
                        <li class="list-group-item2">Email: <span id="email">${data.email}</span></li>
                        <li class="list-group-item3">Office Number: <span id="school">${data.school}</span></li>
                    </ul>
            </div>
        `
        
    })
}