console.log("Hello World!");

//Practice Q1
const fName = "Anna";
const lName = "Zeigler";

function printName(firstName, lastName){
    console.log(firstName + " " + lastName)
}

//printName(fName, lName);


//Practice Q2
const numbers = [1, 1, 2, 3, 5, 8, 13, 21];

function findMean(numList){
    total = 0;
    for(i=0; i<numList.length; i++){
        total = total + numList[i];
    }
    mean = total / numList.length;
    return mean;
}

//console.log(findMean(numbers));


//Practice Q3
const passArg = 10;

function staircase(num){
    for (i=1; i<= num; i++){
            spaces = "";
        for(j=1; j<i; j++){
            spaces = spaces + " ";
        }
        console.log(spaces + i);
    }   
}

//staircase(passArg);


arrOfNotes = [];
highPriNotes = [];
mediumPriNotes = [];
lowPriNotes = [];

const add = function(text, priority){
    arrOfNotes.push({
        text,
        priority,
        author: "Annie"
    });

};

const list = function(){
    arrOfNotes.forEach(item => {
        console.log(item)
    })

};

/*const removeByIndex = function(index){
    newArr = [];
    for (let  i = 0; i < arrOfNotes.length; i++){
        if(i == index)
            continue;
        else   
            newArr.push(arrOfNotes[i]);
    }
    arrOfNotes = newArr;
};*/

const removeByIndex = function(index){
    arrOfNotes.splice(index, 1);
};



//EXTRA FUNCTIONS
const sortByPriority = function(){
    for (let i=0; i < arrOfNotes.length; i++){
        if (arrOfNotes[i].priority == 'high')
            highPriNotes.push(arrOfNotes[i]);
        else if (arrOfNotes[i].priority == 'medium')
            mediumPriNotes.push(arrOfNotes[i]);
        else if (arrOfNotes[i].priority == 'low')
            lowPriNotes.push(arrOfNotes[i]);
    }
};


const highList = function(){
    highPriNotes.forEach(item => {
        console.log(item)
    })
};

const mediumList = function(){
    mediumPriNotes.forEach(item => {
        console.log(item)
    })
};

const lowList = function(){
    lowPriNotes.forEach(item => {
        console.log(item)
    })
};

const removeByPriority = function(pri){
    for (let i=0; i < arrOfNotes.length; i++){
        if (arrOfNotes[i].priority == pri)
            removeByIndex(i); 
    }
}


//Create Notes
add("Note #1", 'low');
add("Note #2", 'high');
add("Note #3", 'low');
add("Note #4", 'medium');
add("Note #5", 'low');
add("Note #6", 'high');
add("Note #7", 'medium');
add("Note #8", 'medium');
add("Note #9");


//Print Original List
list();

removeByIndex(3);
removeByIndex(0);
//removeByPriority('high');
console.log("\n");
list();

/*
console.log("\n");
sortByPriority();
highList();
mediumList();
lowList();*/