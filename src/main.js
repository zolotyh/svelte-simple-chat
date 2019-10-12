import App from './App.svelte';

// var div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red";
// div.style.color = "white";
// div.innerHTML = "Hello";

// document.getElementById("main").appendChild(div);
//
window.initInfobipApp = ({target}) => {
  new App({
    target,
    props: {
      name: 0,
    },
  });
};
