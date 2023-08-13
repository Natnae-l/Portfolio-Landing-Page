// document.querySelector("button").addEventListener("click", getFetch)

function getFetch(){
    // const choice = document.querySelector("input").value.toLowerCase()
    const url = `https://dnd5eapi.co/api/spells`

    fetch (url)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            
        });
    
}
console.log(getFetch())