const gridContainer = document.querySelector('.grid-container');
const disclaimer = document.getElementById('disclaimer')

function createArtcile(code,rate, description, rate_float){
return (
`<article class="mini-table">
    <h2>${code}</h2>
    <div>rate: <p>${rate}</p></div>
    <div>description: <p>${description}</p></div>
    <div>rate_float: <p>${rate_float}</p> </div>
</article>`
)
}

async function getData() {
    let dataOne =  await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    let dataTwo = await dataOne.json();
    let dataUSD = await dataTwo.bpi.USD;
    let dataGBP = await dataTwo.bpi.GBP;
    let dataEUR = await dataTwo.bpi.EUR;
    console.log(dataTwo)

    disclaimer.innerHTML +=( `<p>Loading...</p>`)
    
    setTimeout(() => {
        disclaimer.innerHTML =''
        gridContainer.innerHTML += createArtcile(dataUSD.code,dataUSD.rate, dataUSD.description, dataUSD.rate_float)
        gridContainer.innerHTML += createArtcile(dataGBP.code,dataGBP.rate, dataGBP.description, dataGBP.rate_float)
        gridContainer.innerHTML += createArtcile(dataEUR.code,dataEUR.rate, dataEUR.description, dataEUR.rate_float)
        disclaimer.innerHTML += dataTwo.disclaimer
    }, 1000);
 
    
}
getData()

