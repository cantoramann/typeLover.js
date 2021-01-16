let animate = document.querySelectorAll('.type-lover');
let dictionary = [];
for (let i = 0; i < animate.length; i++) {
    dictionary.push({
        text: animate[i].innerHTML,
        delayTime: parseFloat(animate[i].getAttribute("animation-delay")),
        object: animate[i]
    });
    animate[i].innerHTML = "";
}

for (let i = 0; i < animate.length; i++) {

    for (var j = 0; j < dictionary[i].text.length; j++) {
        delayAnim(i, j, dictionary[i].text);
    }
}

function delayAnim(i, j, str) {
    setTimeout(function () {
        dictionary[i].object.innerHTML += dictionary[i].text.charAt(j);
    }, dictionary[i].delayTime * j);
}

