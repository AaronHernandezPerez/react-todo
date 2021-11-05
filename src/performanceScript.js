const todos = [
  {
    id: 100001,
    title: "We need to input the haptic AI monitor!",
    completed: false,
    extraData: {
      name: "Camren",
      middleName: "c",
      lastName: "b",
      phone: "(615) 781-6587 x9568",
      finances: {
        account: "05716223",
        accountName: "Investment Account",
        amount: "322.99",
        iban: "CH67751134612237K2KQ8",
      },
      vehicle: {
        vehicle: "Smart F-150",
        manufacturer: "Bugatti",
        model: "Durango",
        vin: "A8C5EHT16DVP63542",
      },
    },
  },
  {
    id: 100002,
    title: "We need to synthesize the neural XSS feed!",
    completed: true,
    extraData: {
      name: "Neva",
      middleName: "c",
      lastName: "c",
      phone: "(209) 303-0361",
      finances: {
        account: "91574269",
        accountName: "Money Market Account",
        amount: "997.75",
        iban: "IS220936415133050270665215",
      },
      vehicle: {
        vehicle: "Fiat Escalade",
        manufacturer: "Jeep",
        model: "Silverado",
        vin: "BZECKCYPDUWP25756",
      },
    },
  },
  {
    id: 100003,
    title:
      "compressing the alarm won't do anything, we need to bypass the primary JSON pixel!",
    completed: true,
    extraData: {
      name: "Cassandra",
      middleName: "b",
      lastName: "a",
      phone: "(862) 837-3297 x63292",
      finances: {
        account: "47227781",
        accountName: "Savings Account",
        amount: "943.48",
        iban: "SE4945042790210087870063",
      },
      vehicle: {
        vehicle: "Honda Colorado",
        manufacturer: "Mazda",
        model: "911",
        vin: "445SY2PWEJM357128",
      },
    },
  },
  {
    id: 100004,
    title: "We need to bypass the optical USB card!",
    completed: true,
    extraData: {
      name: "Gustave",
      middleName: "a",
      lastName: "a",
      phone: "388.325.8429",
      finances: {
        account: "53091772",
        accountName: "Personal Loan Account",
        amount: "475.29",
        iban: "MC320084249005937417589V362",
      },
      vehicle: {
        vehicle: "Fiat PT Cruiser",
        manufacturer: "Jeep",
        model: "Malibu",
        vin: "N95G6XVM9ZKM37521",
      },
    },
  },
  {
    id: 10005,
    title: "We need to index the redundant SAS firewall!",
    completed: true,
    extraData: {
      name: "Bridgette",
      middleName: "b",
      lastName: "a",
      phone: "955.644.0006",
      finances: {
        account: "13583715",
        accountName: "Savings Account",
        amount: "413.70",
        iban: "MK48005P80392413238",
      },
      vehicle: {
        vehicle: "Kia 1",
        manufacturer: "Smart",
        model: "A8",
        vin: "HEKYXF21ZNLN77937",
      },
    },
  },
];

function wait(seconds = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds);
  });
}

export async function operations(changeTitle, changeMarked, addElement) {
  changeTitle("We need to input the");
  await wait()
  // console.log("changeMarked")
  changeMarked(true);
  await wait()
  todos.forEach(async (e) => {
    // console.log("Add element")
    addElement(e);
  });
  await wait()
  changeMarked(false);
  changeTitle();

  console.log("finish")
}
