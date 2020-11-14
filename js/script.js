//My Api Key
var apikey ={
    key: 'ab99cc7f-2dad-43e1-972b-5138ac8655ed'
}

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
.then((response) => {
    if(!response.ok) throw new Error('Error executing request, status' + response.status);
    return response.json();
})
.then((api) =>{
    
    var text = '';

    // Get 10 coins and symbols 
    for (let i = 0; i < 10; i++) {
        console.log(api);
   
        //Show API Informatio
        text = text + `
        
        <div class="media">
            <img src="img/coin.png" class="align-self-center mr-3" alt="coin" width="100" heigth="60">
            <div class="media-body">
            <h5 class="mt-2">${api.data[i].name}</h5>
            <p>${api.data[i].symbol} | ${api.data[i].first_historical_data.substring(0,10)}</p>
            </div>
        </div>
        
        `;
    
        document.getElementById('coins').innerHTML = text;
    }


})
.catch((error) =>{
    console.log(error.message);
});
