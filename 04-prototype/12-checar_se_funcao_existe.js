if (typeof Array.prototype.checkLength !== 'function') {
  Array.prototype.checkLength = function () {
    return this.length;
  };
}

// if (typeof Array.prototype.join !== 'function') {
  Array.prototype.join = function () {
    return this[0] + this[1] + this[2];
  };
// }

let a = [1, 2, 3, 4, 5, 6, 7];

let b = [12, 2, 4];


console.log(a.checkLength());
console.log(b.checkLength());

console.log(a.join());

// este metodos criados não devem ser utilizados sempre pois pode ocasionar falhas caso nao seja antes validado se ja existe algum metodo com a mesma função. 

