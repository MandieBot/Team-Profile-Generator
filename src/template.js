function generateTeam(teamData) {
  const managerCard = (manager) => {
    return `<div class="card" style="width: 18rem;">
  <div class="card-header border border-secondary">
    ${manager.getName()}
  </div>
  <h3>${manager.getRole()}</h3>
  <ul class="list-group list-group-flush .fs-2 text">
    <li class="list-group-item">${manager.getId()}</li>
    <li class="list-group-item">${manager.getEmail()}</li>
    <li class="list-group-item">${manager.getOfficeNumber()}</li>
  </ul>
</div>`;
  };
  const engineerCard = (engineer) => {
    return `<div class="card" style="width: 18rem;">
      <div class="card-header border border-primary">${engineer.getName()}</div>
      <h3>${engineer.getRole()}
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${engineer.getId()}</li>
        <li class="list-group-item">${engineer.getEmail()}</li>
        <li class="list-group-item">${engineer.getGithub()}</li>
      </ul>
    </div>`;
  };
  const internCard = (intern) => {
    return `<div class="card" style="width: 18rem;">
  <div class="card-header border border-info">
    ${intern.getName()}
  </div>
  <h3>${intern.getRole()}
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${intern.getId()}</li>
    <li class="list-group-item">${intern.getEmail()}</li>
    <li class="list-group-item">${intern.getSchool()}</li>
  </ul>
</div>`;
  };
  const allCards = [];

  allCards.push(teamData.filter((employee) => employee.getRole() === "Manager").map((manager) => managerCard(manager)));

  allCards.push(teamData.filter((employee) => employee.getRole() === "Engineer").map((engineer) => engineerCard(engineer)));

  allCards.push(teamData.filter((employee) => employee.getRole() === "Intern").map((intern) => internCard(intern)));

  return allCards.join();
}

module.exports = (teamData) => {
  return `
     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
</head>
<body>
<header class="container-fluid text-center text-light bg-danger p-2 mb-4">
  <h1>My Team</h1>
</header>
<main class="container d-flex flex-wrap justify-content-center align-content-center" style="min-height: 90vh">
${generateTeam(teamData)}
</main>
</body>
</html>
  `;
};
