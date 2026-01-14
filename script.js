//проверка возраста
const age = document.getElementById('age');
const res = document.getElementById('res');
if (age && res){
    age.addEventListener('input', () => {
        const age_val = Number(age.value);
        if (age_val >= 18) {
            res.textContent = "Совершеннолетний";
        } else if(!age_val || age_val < 0){
            res.textContent = "Неправильно введено"
        } else {
            res.textContent = "Ребенок";
        }
    });
};
//счетчик нажатий
const counter = document.querySelector(".counter");
const count = document.querySelector(".count");
let num = 0;
if (counter && count){
    counter.addEventListener('click', () => {
        num++ 
        count.textContent = num;
    })
}

//Счетчик посещений
const visited_counter = document.querySelector("#visited");
const title = document.title;
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem(title)){
        localStorage.setItem(title, 0)
    } else{
        val = Number(localStorage.getItem(title));
        val++
        localStorage.setItem(title, val);
        visited_counter.textContent = val;
    }
})

//--------------------------------------------


//задание с студентами
const student1 = {
    name: "Daniyal",
    age: 16,
    class: 10,
    marks: [1,9,2,5,6]
};

const student2 = {
    name: "Almas",
    age: 16,
    class: 11,
    marks: [3,8,10,10,9,6,10]
};

const student3 = {
    name: "Alibek",
    age: 14,
    class: 8,
    marks: [10,10,10]
};

const students = [student1, student2, student3];

function mid(arr){
    let sum_ = 0;
    for (let i = 0; i < arr.length; i++){
        sum_ += arr[i]
    };
    let mark = sum_ / arr.length;
    let res;
    if (mark >= 8){
        res = "A";
    } else if (mark >= 5 && mark < 8){
        res = "B";
    } else{
        res = "C";
    };
    return res
};

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
    console.log(mid(students[i].marks));
};

//---------------------------
//смена темы
const buttons = document.querySelectorAll('.theme')
if (buttons.length > 0){
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.value === "dark"){
                document.body.classList.add('dark');
            } else{
                document.body.classList.remove("dark");
            }
        });
    });
};


//----------------------------------
//to-do list
const form = document.querySelector('#my-form');
const to_do = document.querySelector('.to-do');
const to_do_list = document.querySelector('.to-do-list');
if (form && to_do && to_do_list){
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const task = to_do.value.trim();
        if (task){
            const li = document.createElement('li');
            li.textContent = task
            to_do_list.appendChild(li);
            to_do.value = "";
        }
    })
}