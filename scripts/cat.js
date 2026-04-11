const URL = "https://dogapi.dog/api/v1/facts?number=";
const btn = document.querySelector(".js-get-facts");
const textbox = document.querySelector(".facts");

let randomNum = () => Math.floor(Math.random() * 1000) + 1;

btn.addEventListener('click', (evt) =>{
    fetchData();
});

async function fetchData(){

    try{
        const response = await fetch(URL+`${randomNum()}`);
        if(!response.ok){
            throw new error(`HTTP error! status: ${response.status}`);
        }
        const data = response.json();
        data.then((d) =>{
            const facts = d.facts;
            // console.log(facts);
            textbox.classList.remove("hidden");
            textbox.textContent= facts;
        })
    }
    catch(error){
        console.error('fetch error: ', error);
    }
}
