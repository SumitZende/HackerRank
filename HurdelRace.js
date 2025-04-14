function hurdleRace(k, height) {
  let maximumHeight = Math.max(...height);

  let doses = maximumHeight - k;

  if (doses > 0) {
    console.log(doses);
  } else {
    console.log(0);
  }
}

let k = 4;
let height = [1, 6, 3, 5, 2];
hurdleRace(k, height);
