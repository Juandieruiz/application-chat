// Main
console.log('Conectando al servidor');
var socket = io.connect('http://192.168.1.136:3500',{'forceNew': true});

socket.on('messages', ((data) => {
    console.log(data);
    render(data);
}));

function render(data){
    let html = data.map((elem, index) => {
        return (
            `<div class="message">
                <strong>${elem.nickname}</strong> dice:
                <p>${elem.text}</p>
            </div>`
        );
    }).join(' ');

    document.getElementById('messages').innerHTML = html;
}
