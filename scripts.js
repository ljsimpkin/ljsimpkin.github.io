var temp = document.getElementsByTagName("template")[0];
var clon = temp.content.cloneNode(true);

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

var i;
var shuff = [];
for (i = 0; i < projects.length; i++){
  shuff[i] = i;
}

shuff = shuffle(shuff);
console.log(shuff)

for (i = 0; i < projects.length; i++) {
  clon.getElementById("title").innerHTML = projects[shuff[i]]['title'];
  clon.getElementById("description").innerHTML = projects[shuff[i]]['description'];
  clon.getElementById("url").href = projects[shuff[i]]['url']
  clon.getElementById("src").src = projects[shuff[i]]['src']
  document.getElementById("add_after_me").appendChild(clon);
  clon = temp.content.cloneNode(true);
}