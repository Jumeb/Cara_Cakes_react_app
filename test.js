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