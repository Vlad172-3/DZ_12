document.cookie = "name=Vlad";
document.cookie = "age=15";

let cookies = document.cookie.split("; ");

let container = document.getElementById("container");

let text1 = document.createElement("h1");
text1.innerText = cookies[0];
container.append(text1);

let text2 = document.createElement("h1");
text2.innerText = cookies[1];
container.append(text2);