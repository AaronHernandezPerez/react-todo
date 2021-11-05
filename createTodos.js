const faker = require("faker")
const fs = require("fs");

function createTodos(n) {
  const results= []
  for (let i = 0; i < n; i++) {
    results.push(
      {
        id:i,
        title:faker.hacker.phrase(),
        completed: faker.datatype.boolean(),
        extraData: {
          name:faker.name.firstName(),
          middleName:faker.name.middleName(),
          lastName:faker.name.middleName(),
          phone:faker.phone.phoneNumber(),
          finances: {
            account: faker.finance.account(),
            accountName: faker.finance.accountName(),
            amount: faker.finance.amount(),
            iban: faker.finance.iban(),
          },
          vehicle: {
            vehicle: faker.vehicle.vehicle(),
            manufacturer: faker.vehicle.manufacturer(),
            model: faker.vehicle.model(),
            vin: faker.vehicle.vin(),
          }
        }
      }
      )
  }

  return results
}


const todos = createTodos(5000);
console.log(todos.length)
const json = JSON.stringify({todos})
fs.writeFile('./src/todos.json', json, 'utf8', ()=>{});