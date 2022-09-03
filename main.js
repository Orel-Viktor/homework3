// СЛОЖЕНИЕ

let a = document.getElementById('sumA');
let b = document.getElementById('sumB');
function addition() {
  summa = parseInt(a.value) + parseInt(b.value);
  document.getElementById('sumResult').value = summa;
}

// ВЫЧИТАНИЕ

let c = document.getElementById('subA');
let d = document.getElementById('subB');
function subtraction() {
  sub = parseInt(c.value) - parseInt(d.value);
  document.getElementById('subResult').value = sub
}

// УМНОЖЕНИЕ

let e = document.getElementById("mulA");
let f = document.getElementById("mulB");

function multiplication() {
  mul = parseInt(e.value) * parseInt(f.value);
  document.getElementById("mulResult").value = mul;
}

// Деление

let x = document.getElementById("divA");
let y = document.getElementById("divB");
function division() {
  div = parseInt(x.value) / parseInt(y.value);
  document.getElementById("divResult").value = div;
}

// Сложение

const aa = prompt('слогаемое1', '0' );
const bb = prompt('слогаемое 2', '0');
alert(`Сумма  ${+aa + +bb}`);

// Вычитание

const ee = prompt('уменьшаемое', '0' );
const dd = prompt('вычитатель', '0');
alert(`Разница  ${ee - dd}`);


// УМНОЖЕНИЕ

const ff = prompt('множитель1', '0' );
const gg = prompt('множитель2', '0');
alert(`  ${ff * gg}`);


// Деление

const xx = prompt('делимое', '0' );
const yy = prompt('делитель', '0');
alert(` Часть ${xx / yy}`);

// Средние ареф
const x1 = prompt('введите число', '0');
const x2 = prompt('введите число', '0' );
const x3 = prompt('введите число', '0');
const x4=  Number(+x1 + +x2 + +x3);
alert(`среднее арефметичное ${x4 / 3}`)

//  Шаблонная строка 

const userName = prompt('Имя')
const secondName = prompt('Фамилия')
const age = prompt('Возраст')
alert (`${userName + secondName + age}`)