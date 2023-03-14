

const COUNT = 10;
let array = new Array(COUNT);


fillMatrix();
showMatrix ();


function fillMatrix () {
    
    const newTable = document.createElement('table');

    for (let i = 0; i < COUNT; i++) {
        array [i] = new Array(COUNT);
        const tr = document.createElement('tr');
        for (let j = 0; j < COUNT; j++){
            array [i] [j] = i * 10 + j + 1;
            const td = document.createElement('td');
            td.textContent = array[i][j] + ""
            tr.appendChild(td);
        }
        newTable.appendChild(tr); 
    }
    document.body.appendChild(newTable);
};

function showMatrix () {
    for (let i = 0; i < COUNT; i++) {
        for (let j = 0; j < COUNT; j++){
        }
        document.write("<br />");
    }
}









 