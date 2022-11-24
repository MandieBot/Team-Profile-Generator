function generateTeam(data) {
  var htmlTop = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>
<body>`;
  var card = `
    <div class="card" style="width: 18rem">
  <div class="card-header">Featured</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>`;
  var htmlBottom = `</body>
</html>`;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
  return htmlTop + card + htmlBottom;
}

module.exports = generateTeam;
