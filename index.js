//Adding 100 para.......
// const t1 = performance.now();
// for(let i=1; i<=100; i++){
//     newElement = document.createElement('p');
//     newElement.textContent = 'This is a para' + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("This took " + (t2 - t1) + " ms");


// //Optimisng a bit .......
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is Para' + i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);

// const t4 = performance.now();
// console.log("This took " + (t4 - t3) + " ms")


//FragmentDocument.........
// let fragment = document.createDocumentFragment();

// for(let i=1; i<=100; i++){
//         newElement = document.createElement('p');
//         newElement.textContent = 'This is a para' + i;
    
//         fragment.appendChild(newElement);
//     }

//     document.body.appendChild(fragment); //1 Reflow and 1 Repaint only


//Single Threading in JS...........
function addPara(){
    newElement = document.createElement('p');
    newElement.textContent = 'JS is single';

    document.body.appendChild(newElement);
}

function appendNewMessage(){
    let para = document.createElement('p');
    para.textContent = 'Hello World';

    document.body.appendChild(para);
}

addPara();
appendNewMessage();
