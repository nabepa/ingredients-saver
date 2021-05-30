const fs = require('fs');
csv = fs.readFileSync('INGREDIENTS.csv');

const rows = csv.toString().split('\n');

const result = [];
for (let row of rows) {
  data = row.split(';');
  element = { id: data[1], query: data[0] };
  result.push(element);
}

let json = JSON.stringify(result);
fs.writeFileSync('INGREDIENTS.json', json);
