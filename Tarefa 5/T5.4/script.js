    let result = "";
    let num = document.getElementById('number');
    let btn = document.getElementById('btn');
    function tabueida() {
      num = document.getElementById('number').value;
      result = `Tabueida do ${num}\n 1 x ${num} = ${num}\n 2 x ${num} = ${
        num * 2
      }\n 3 x ${num} = ${num * 3}\n 4 x ${num} = ${num * 4}\n 5 x ${num} = ${
        num * 5
      }\n 6 x ${num} = ${num * 6}\n 7 x ${num} = ${num * 7}\n 8 x ${num} = ${
        num * 8
      }\n 9 x ${num} = ${num * 9}\n 10 x ${num} = ${num * 10}\n`;
      Alert(result);
    }
    btn.addEventListener('click',tabueida(num));
