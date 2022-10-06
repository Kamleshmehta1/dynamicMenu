let container = document.querySelector(".container");
let table = document.querySelector(".table");

document.addEventListener('click', (event) => {
    event.preventDefault();
    renderElements(jsonArray);
}, { once: true });


function renderElements(jsonArray) { 
    jsonArray.forEach((ele)=>{
      flatterObject(ele);
    })
}

function flatterObject(data){
  func (data,val,);
}

// function func (obj, val, length, i){
//   let temp = obj[val[i]];
//   i++;
//   if (i == length) return temp;
//   return func(temp, val, length, i);
// };

// const flatternObject = (data) => {
//   const val = data.split(".");
//   console.log(func(obj, val, val.length, 0));
// };

// flatternObject("KeyB.e.f");