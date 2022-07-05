let reportAcudits=[];
let puntuation = 0;
let dadOrChucky = true;
let acudit = "";

window.onload=function(){
    $.ajax({
        url: "http://api.weatherunlocked.com/api/current/es.08013?app_id=46220a89&app_key=e0fa491fa3da98cacb8123ac985c2413",
        type: "GET",
        success: function (parsedResponse, statusText, jqXhr) {
            //console.log(parsedResponse);
            oratge.innerHTML = "<img src='set/"+parsedResponse.wx_icon+"' alt='"+parsedResponse.wx_desc+"'> | "+ parsedResponse.temp_c +" ºC";
        },
        error: function (error) {
            console.log(error);
        }
    });
    
};

async function nextJoke() {
        
        if (puntuation !=0) { 
            const d = new Date();
            let data = d.toISOString();
            reportAcudits.push({joke: acudit, score: puntuation , date: data});
            console.log(reportAcudits);
        }
        puntuation=0;

        if (dadOrChucky==true){
            const response = await fetch("http://icanhazdadjoke.com", {
                headers: {Accept: "application/json"}
            });   
            const joke = await response.json();
            //console.log(joke);
            acudit = joke.joke;
            joker.innerHTML = joke.joke + "</br><div class='btn-group'><button type='button' onclick='puntuar(1)' class='btn btn-outline-dark'>Dolent</button><button type='button' onclick='puntuar(2)' class='btn btn-outline-dark'>Regular</button><button type='button' onclick='puntuar(3)' class='btn btn-outline-dark'>Boníssim</button></div>";
            dadOrChucky=false;
           
        }else {chucky();}
    }

function puntuar(puntuacion){
        puntuation = puntuacion;
    }

function chucky(){
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

fetch("https://api.chucknorris.io/jokes/random", requestOptions)
  .then(response => response.json())
  .then(result => {
        //console.log(result);
            acudit= result.value;
            joker.innerHTML = result.value + "</br><div class='btn-group'><button type='button' onclick='puntuar(1)' class='btn btn-outline-dark'>Dolent</button><button type='button' onclick='puntuar(2)' class='btn btn-outline-dark'>Regular</button><button type='button' onclick='puntuar(3)' class='btn btn-outline-dark'>Boníssim</button></div>";
    })
  .catch(error => console.log('error', error));
  dadOrChucky=true;
};