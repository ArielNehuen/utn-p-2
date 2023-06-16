var num = [1, 4, 6, 7, 20, 18];

for (var i = 0; i < num.length - 1; i++) {
  for (var j = 0; j < num.length - i - 1; j++) {
    if (num[j] > num[j + 1]) {
      var temp = num[j];
      num[j] = num[j + 1];
      num[j + 1] = temp;
    }
  }
}

console.log(num);
