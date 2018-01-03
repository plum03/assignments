let xhr = new XMLHttpRequest();
xhr.onreadystatechange() = function(){
    if(xhr.readyState == 4 && xhr.status == 200) {
        let jsonData = xhr.responseText;
        let data = JSON.parse(jsonData);
        let h3 = document.createElement("h3");
        h3.innerHTML = "Name: " + data.name;
        let h4 = document.createElement("h4");
        h4.innerHTML = "Height: " + data.height;
        let p = document.createElement("p");
        p.innerHTML = "Mass: " + data.mass;
        let div = document.getElementById("profile-info");
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(p);

        console.log(data);
    }
};

xrh.open("GET", "https://swapi.co/api/people/1", true);
xhr.send();





