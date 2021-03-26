  const month = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]

let text = 'marc'

const DateString = (dateString) => {
    const myDate = new Date(dateString);
    if (myDate.getDate().toString() === new Date().getDate().toString()) {
        return 'Today';
    }
    if (myDate.getDate().toString() === (Number(new Date().getDate()) - 1).toString()) {
        return 'Yesterday';
    } else {
        return month[myDate.getMonth()] + ' ' + myDate.getDate() + ', ' + myDate.getFullYear();

    }
}

const objes = {
  '6/11/2021': [
    { id: 55, pId: [Object], qty: 2 },
    { id: 55, pId: [Object], qty: 2 },
    { id: 55, pId: [Object], qty: 2 }
  ],
  '3/12/2021': [
    { id: 5, pId: [Object], qty: 1 },
    { id: 53, pId: [Object], qty: 2 }
  ],
  '3/13/2021': [ { id: 55, pId: [Object], qty: 2 } ],
  '5/14/2021': [ { id: 55, pId: [Object], qty: 2 } ],
  '8/15/2021': [ { id: 55, pId: [Object], qty: 2 } ]
}

let fiterre = Object.keys(objes).filter((p) => {
    if(p === undefined) {
            return null;
        }
        let _services = `${DateString(p).toLowerCase()}`;
        let _text = text.toLowerCase();
        return _services.indexOf(_text) > -1;
})

const filtered = Object.keys(objes)
  .filter(key => fiterre.includes(key))
  .reduce((obj, key) => {
    obj[key] = objes[key];
    return obj;
  }, {});

console.log(filtered);

const objHel = [
        { value: "North-West", label: "North-West" },
        { value: "South-West", label: "South-West" },
        { value: "West", label: "West" },
        { value: "Center", label: "Center" },
        { value: "Litoral", label: "Litoral" },
        { value: "North", label: "North" },
        { value: "East", label: "East" },
        { value: "North-West", label: "North-West" },
]

const arr = ['South-West', 'West', 'Center'];
    
const filet = objHel.filter(value => {
  return value.value === ('South-West' && 'Center');
})

let _categories = [];

const categories = (categories, options) => {
    categories.map((category, index) => {
        let filtered = options.filter(value => {
            return value.value === category;
        });
        return _categories.push(filtered[0]);
    })
}

categories(arr, objHel);

console.log(_categories);