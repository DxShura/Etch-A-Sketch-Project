const container = document.querySelector('#containerSketch');
function gridDiv(){
    let grid = 16;
        for(let a = 0; a < grid; a++)
            {
            for(let i = 0; i < grid; i++)
                {
                
                const content = document.createElement('div');
                content.classList.add('content-sketch');
                container.appendChild(content);

                content.addEventListener('mouseenter',function() {
                content.classList.add('backGroundWhite');
                });
            }
        }
    }
gridDiv();

function backColor(){
    let colorOne = Math.floor(Math.random() * 254);
    let colorTwo = Math.floor(Math.random() * 254);
    let colorTree = Math.floor(Math.random() * 254);
    return 'rgb('+ colorOne + ', ' + colorTwo + ', ' + colorTree + ')';
}

function removeHovered(deleteClass) {
    for(let i = 0; i< deleteClass.length; i++){
        deleteClass[i].classList.remove('backGroundWhite');
        deleteClass[i].style.backgroundColor = null;
    }
}

const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', ()=>{
    let divRainbow = document.querySelectorAll('.content-sketch');
    removeHovered(divRainbow);
    for(let i = 0; i< divRainbow.length; i++){
        divRainbow[i].addEventListener('mouseenter', ()=>{
            divRainbow[i].classList.remove('backGroundWhite');
            divRainbow[i].style.backgroundColor = backColor();
        });
    }
});

const whiteColor = document.querySelector('#whiteColor');
whiteColor.addEventListener('click', ()=>{
    let divWhite = document.querySelectorAll('.content-sketch');
    removeHovered(divWhite);
    for(let i = 0; i < divWhite.length; i++){
        divWhite[i].addEventListener('mouseenter', ()=>{
            divWhite[i].style.backgroundColor = "#fff";
        });
    }
});

const erase = document.querySelector('#erase');
erase.addEventListener('click', function(){
    const squares = document.querySelectorAll("#containerSketch div");
    removeHovered(squares);
});

function deleteDiv(){
    while (container.firstChild) {
            container.removeChild(container.firstChild);
    }
}

const newGrid = document.querySelector('#newGrid');
newGrid.addEventListener('click', function(){
    let widthGrid;
    
    let sizeSquare = 300;
    deleteDiv();

    if(window.matchMedia("(min-width: 768px)").matches){
        sizeSquare = 600;
    }
    
    do{
        if(widthGrid === null){
            gridDiv();
            break;
        }else{
            widthGrid = prompt("Choisissez un nombre entre 10 et 100 pour la taille de la grille!");
        }
    }while(widthGrid > 100 || widthGrid < 10 || isNaN(widthGrid))

    let widthHeight = sizeSquare/widthGrid;
    for(let a = 0; a < widthGrid; a++)
        {
        for(let i = 0; i < widthGrid; i++)
            {
            const container = document.querySelector('#containerSketch');
            const content = document.createElement('div');
            content.classList.add('content-sketch');
            content.style.width = widthHeight + 'px';
            content.style.height = widthHeight + 'px';
            container.appendChild(content);
            content.addEventListener('mouseenter',function() {
            content.classList.add('backGroundWhite');
            });
        }
    }
});