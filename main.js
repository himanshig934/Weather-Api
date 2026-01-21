

let button = document.getElementById('btn'); 
let text = document.querySelector('.text');
let inputvalue = document.querySelector('#inputvalue');

button.addEventListener('click', async(e) => {
e.preventDefault();

try {

    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=efdde37ca6c34b6c8e3111558262001&q=${inputvalue.value}`);
    let data = await response.json();

    if(!response.ok){
            throw new Error("Invalid location");
    }

   text.innerText = 
         `Location: ${data.location.name}
                  ${data.location.localtime}
          Temperature: ${data.current.temp_c} °C
          Condition: ${data.current.condition.text}`;

} catch (error) {
    text.innerText = 'could not found a data, please enter a correct location';
}

});

