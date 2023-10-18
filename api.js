//const getButton = document.getElementById('get-data-btn');
const urlAPI = "http://it-its.id/api/movies"

const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', urlAPI);

    xhr.responseType = 'json';

    xhr.onload = () =>{
        const data = xhr.response;
        console.log(data);

        document.getElementById("title-0").innerHTML = data[0].Title;
        document.getElementById("title-1").innerHTML = data[1].Title;
        document.getElementById("title-2").innerHTML = data[2].Title;
        document.getElementById("title-3").innerHTML = data[3].Title;
        document.getElementById("title-4").innerHTML = data[4].Title;
        document.getElementById("title-5").innerHTML = data[5].Title;
        document.getElementById("title-6").innerHTML = data[6].Title;
        document.getElementById("title-7").innerHTML = data[7].Title;
        document.getElementById("title-8").innerHTML = data[8].Title;
        document.getElementById("title-9").innerHTML = data[9].Title;

        document.getElementById("plot-0").innerHTML = data[0].Plot;
        document.getElementById("plot-1").innerHTML = data[1].Plot;
        document.getElementById("plot-2").innerHTML = data[2].Plot;
        document.getElementById("plot-3").innerHTML = data[3].Plot;
        document.getElementById("plot-4").innerHTML = data[4].Plot;
        document.getElementById("plot-5").innerHTML = data[5].Plot;
        document.getElementById("plot-6").innerHTML = data[6].Plot;
        document.getElementById("plot-7").innerHTML = data[7].Plot;
        document.getElementById("plot-8").innerHTML = data[8].Plot;
        document.getElementById("plot-9").innerHTML = data[9].Plot;
    };

    xhr.send();
};


getData();
//getButton.addEventListener('click', getData);