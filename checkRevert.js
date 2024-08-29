const a = 'helloWorld';

const b = 'goodbyeCities';

const c = 'hyeTown';

const arr1 = [a, b];
const arr2 = [c];

const arr3 = arr2.concat(arr1);

console.log(arr3);

const arr4 = arr1.concat(arr2);

console.log(arr4);

arr4.forEach(data => {
  console.log(data);
})


const urlText = 'https://aaa.example.com/services_files/summary/1231212-12312312-32423423/dfgkajfasasd_1_123534344334_summary.'
const atest = urlText.split('/').splice(-3, 3).join('/');

console.log(atest);

const originText = '1/2/3/4/5/6/7/8/9/10';
const frontText = originText.split('/').splice(1, 3).join('/');
console.log(frontText);
const backText = originText.split('/').splice(-3, 3).join('/');
console.log(backText);

let array = ['1番目', '2番目', '3番目', '4番目', '5番目'];
console.log(array.splice(1,3));
console.log(array);