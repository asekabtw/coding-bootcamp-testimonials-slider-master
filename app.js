const people = [
    {
        id: 1,
        name: "Tanya Sinclair",
        job: "UX Engineer",
        img: "./images/image-tanya.jpg",
        text: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
    },
    {
        id: 2,
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
        img: "./images/image-john.jpg",
        text: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    },
];

const person = document.querySelector(".info__name");
const job = document.querySelector(".info__job");
const img = document.getElementById("img");
const text = document.querySelector(".info__description");

const prevBtn = document.querySelector(".button__item--prev");
const nextBtn = document.querySelector(".button__item--next");

let currentName = 0;

window.addEventListener("DOMContentLoaded", () => {
    showName(currentName);
});

function showName(author) {
    const item = people[author];
    img.src = item.img;
    person.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}

prevBtn.addEventListener("click", () => {
    currentName--;
    if (currentName < 0) {
        currentName = 1;
    }
    showName(currentName);
});

nextBtn.addEventListener("click", () => {
    currentName++;
    if (currentName > people.length - 1) {
        currentName = 0;
    }
    showName(currentName);
});
