
var me = 'Nataly Basovich';
var text = 'Let\'s see what else we\'ve got here"';
var isLikeToStudyJS = true;
let currentDate = new Date();

//console.log(document.getElementsByTagName('a'))
let links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(){
        console.log('Link' + links[i].innerHTML + 'was pressed')
    })
}

function addH2() {
    var h2 = document.createElement('h2');
    var txtH2 = document.createTextNode("I really would like to hear from you!");
    h2.appendChild(txtH2);
    var divContact = document.getElementById('contact-form');
    divContact.appendChild(h2);
}

function writeHi(){
   /* let count = prompt('Please enter a number between 1-5');
    console.log(count);
    let value = 5; 
    if (value > +count) value = count; */

  /*  let value = Math.floor(Math.random() * 3) + 1;  
    console.log(value);
    for (let i = 0; i < value; i++){
        alert('Hi');
    } */
}

const DAY_WEEK_OBJ = {
    0: 'Sanday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednsday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
} 

function dateFunc() {
    let dateStr = currentDate.getDate() + '/' 
    + currentDate.getMonth() + '/' 
    + currentDate.getFullYear() + ' '
    + currentDate.getHours() + ':'
    + currentDate.getMinutes() + ':'
    + currentDate.getSeconds() + ' '
    + DAY_WEEK_OBJ[currentDate.getDay()];
    var dateDiv = document.getElementById("date-homepage");
    dateDiv.innerHTML = dateStr;
}

function partOfDay() {
    let hourDay = currentDate.getHours();
    let text = '';
    if (hourDay >= 21) text = 'Good nigth';
    else if (hourDay >= 17) text = 'Good evening';
    else if (hourDay >= 12) text = 'Good day';
    else if (hourDay >= 7) text = 'Good morning';
    var hourGreeting = document.getElementById('greeting-homepage');
    hourGreeting.innerHTML = text;
}

function weekDay(){
    let todayWeek = currentDate.getDay();
    var table = document.getElementById('schedule-table');
    var tr = table.getElementsByTagName('tr');
    //console.log(tr[todayWeek+1])
    tr[todayWeek+1].style.backgroundColor = '#659dbd';
    tr[todayWeek+1].style.color = 'white';
    var th = tr[todayWeek+1].getElementsByTagName('th');
    var elDiv = document.createElement('div');
    elDiv.innerHTML = 'Today';
    th[0].appendChild(elDiv);
    elDiv.style.paddingTop = '10px';
}

function onloadHomepage() {
    printMe();
    writeHi();
    dateFunc();
    partOfDay();
}

function onloadSchedule() {
    weekDay();
}

function printMe() {
    console.log('The website was created by ' + me);
    console.log(text);
    if (isLikeToStudyJS === true)
        console.log("I would like to learn JS!");
    else
        console.log("I wouldn't like to learn JS");
}

function onPhotoClick(event) {
    event.lastElementChild.style.visibility='visible';
    event.lastElementChild.style.bottom=0;
}

var images = [
    {img: "img/closet-2.JPG", text:"I love to play hide and seek with family!"},
    {img: "img/eat.jpg", text:"I love my family to bring me the breakfast into the bed!"},
    {img: "img/closet.JPG", text:"I like clean towels in quiet place."},
    {img: "img/water.jpg", text:"I like to play with water streams!"},
    {img: "img/work.JPG", text:"Sometimes I can do a little work on warm laptop!"},
]

var num = 0;

function next() {
    var sliderCurrent = document.getElementById("slider-" + num);
    num++;
    if (num >= images.length){
        num = 0;
    }
    var sliderNew = document.getElementById("slider-" + num);
    sliderCurrent.className = "hidden-hobbies slider-hobbies";
    sliderNew.className = "slider-hobbies";
}

function prev() {
    var sliderCurrent = document.getElementById("slider-" + num);
    num--;
    if (num < 0){
        num = images.length - 1;
    }
    var sliderNew = document.getElementById("slider-" + num);
    sliderCurrent.className = "hidden-hobbies slider-hobbies";
    sliderNew.className = "slider-hobbies";
}

function onClickCover(event) {
    event.style.left = "-100vw";
    event.parentNode.style.overflow = 'auto';
}



function task12() {
    let groceryArr = ['vegetables', 'fruit', 'dairy', 'bakery', 'meat', 'seafood', 'pasta', 'rice', 'frozen'];
    let groceryAppleObj = {
        category: groceryArr[1],
        name: 'apple',
        color: 'red',
        descrition: 'The apple is a pome (fleshy) fruit',
        isLike: false,
        "likesToEat": function() {
            return 'I don\'t like to eat this.'
        }
    }

    let groceryTomatoObj = {
        category: groceryArr[0],
        name: 'tomato',
        color: 'red',
        descrition: 'The tomato is flowering plant of the nightshade family',
        isLike: true,
        "likesToEat": function() {
            return 'I like to eat this.'
        }
    }

    let groceryBreadObj = {
            category: groceryArr[3],
            name: bread,
            color: red,
            descrition: 'Bred is baked food product made of flour',
            isLike: true,
            "likesToEat": function() {
                return 'I like to eat this.'
            }
    }
}