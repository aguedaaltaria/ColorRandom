let generarBtn = document.getElementById('generar');
let colorDiv = document.querySelectorAll('#color');
let numero = document.querySelectorAll('#numero');

function generarColor() {
    for (let i = 0; i < colorDiv.length; i++) {
        // const rojo = Math.floor(Math.random() * 256);
        // const verde = Math.floor(Math.random() * 256);
        // const azul = Math.floor(Math.random() * 256);

        // const codigoHex = `#${rojo.toString(16)}${verde.toString(16)}${azul.toString(16)}`;

        const color = Math.floor(Math.random() * 256 * 256 * 256);
        const codigoHex = `#${color.toString(16)}`;

        numero[i].innerHTML = codigoHex;
        colorDiv[i].style.backgroundColor = numero[i].textContent;
    }

    // const codigo1 = numero[0].textContent;
    // var codigo2 = numero[1].textContent;
    // var codigo3 = numero[2].textContent;

    // colorDiv[0].style.backgroundColor = codigo1;
    // colorDiv[1].style.backgroundColor = codigo2;
    // colorDiv[2].style.backgroundColor = codigo3;

    desmarcar();
};

// Lista /////////// 

let checkbox = document.querySelectorAll('input');
let list = document.getElementById('list');
let IDCounter = 0;

checkbox[0].addEventListener('click', function() {
    if (this.checked) {
        addFav0();
    } 
});

checkbox[1].addEventListener('click', function() {
    if (this.checked) {
        addFav1();
    }
});

checkbox[2].addEventListener('click', function() {
    if (this.checked) {
        addFav2();
    }
});

function addFav0() {
    let codigo1 = numero[0].innerHTML;
    IDCounter++;
    list.innerHTML += `
    <div class="tarea" id="a${IDCounter}">
        <div>
            <span id="corazon1" style="color: ${codigo1}" class="material-symbols-outlined">
                favorite
            </span>
            <span class="colorFav">${codigo1}</span>
        </div>
        <img src="cancel.svg" class="closeBtn">
        <hr></div>
    `;
};

function addFav1() {
    let codigo1 = numero[1].innerHTML;
    IDCounter++;
    list.innerHTML += `
    <div class="tarea" id="b${IDCounter}">
        <div>
            <span id="corazon1" style="color: ${codigo1}" class="material-symbols-outlined">
                favorite
            </span>
            <span class="colorFav">${codigo1}</span>
        </div>
        <img src="cancel.svg" class="closeBtn">
        <hr></div>
    `;
};

function addFav2() {
    let codigo1 = numero[2].innerHTML;
    IDCounter++;
    list.innerHTML += `
    <div class="tarea" id="c${IDCounter}">
        <div>
            <span id="corazon1" style="color: ${codigo1}" class="material-symbols-outlined">
                favorite
            </span>
            <span class="colorFav">${codigo1}</span>
        </div>
        <img src="cancel.svg" class="closeBtn">
        <hr></div>
    `;
};

list.addEventListener('click', (event) => {
    if (event.srcElement.nodeName == "IMG") {
        borrar(event.srcElement.parentNode.id);
    }
});

function borrar(id) {
    let borrar = document.getElementById(id);
    list.removeChild(borrar);
};

// Desmarcar ////////////

function desmarcar() {
    for (let a of checkbox) {
        a.checked = false;
    }
};

function borrarLista() {
    list.innerHTML = `
    <p>Colores Favoritos</p>
    <button id="borrarLista" onclick="borrarLista()"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#b67344"><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Zm296-80 314-322-198-198-442 456 64 64h262Zm-6-240Z"/></svg></button>
    `;
}