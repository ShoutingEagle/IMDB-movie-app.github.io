window.addEventListener('load' , () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})



function data(){
    const API_KEY = document.getElementById("api-key").value;
    const SEARCH_TERM = document.getElementById("search").value;

    if(API_KEY === ''){
        alert('Please enter an api key');
        document.getElementById("api-key").value = '';
        document.getElementById("search").value = '';
        return;
    }
    if(SEARCH_TERM === ''){
        alert('Enter Movie Name');
        document.getElementById("api-key").value = '';
        document.getElementById("search").value = '';
        return;
    }


    document.getElementById("api-key").value = '';
    document.getElementById("search").value = '';



    

    fetchData(SEARCH_TERM,API_KEY);
}



async function fetchData (SEARCH_TERM,API_KEY) {
        
        const URL = `https://www.omdbapi.com/?s=${SEARCH_TERM}&apikey=${API_KEY}` ;
        const response  = await fetch(URL);
        const responseData = await response.json();
        if(responseData.Response === 'True'){
            renderData(responseData);
        }
        else{
            alert(responseData.Error);
        }
        
        
}



function renderData(responseData){
    const wrapperBottom = document.getElementById("wrapper-bottom");
    wrapperBottom.innerHTML = '';
    const data = responseData.Search;

    for(let i=0;i<data.length;i++){
        wrapperBottom.innerHTML += `<div class="card">
        <div class="poster-container">
        <div class="poster-inner-container"><img src="${data[i].Poster}" alt="Poster" class="poster"></div>
        </div>
        <div class="details-container">
            <div class="si-no">${i+1}</div>
            <div class="title">${data[i].Title}</div>
        </div>
    </div>`
    }
    
    
}


fetchData('ted','b94420c6');


