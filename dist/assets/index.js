import './style.css';

// const app = document.querySelector('.app');

const btnStart = document.querySelector('.game_button_start');
// const btnLvl = document.querySelectorAll('.button');

window.application = {};

document.querySelectorAll('.button').forEach((element) => {
    // btnLvl.addEventListener('click', function () {
    //     btnLvl.classList.remove('border_red');
    // });
    element.addEventListener('click', function (event) {
        // element.style.border = '3px solid red';
        // const target = event.target;

        element.classList.add('border_red');

        const levelBtn = event.target.textContent;

        console.log(levelBtn);

        window.application.level = levelBtn;
    });
});

btnStart?.addEventListener('click', () => {
    const level = window.application.level;
    console.log(level);
    if (level === '1') {
        window.location.href = '6_cards.html';
    } else if (level === '2') {
        window.location.href = '12_cards.html';
    } else if (level === '3') {
        window.location.href = '18_cards.html';
    } else {
        alert('Выбери сложность');
    }
});
