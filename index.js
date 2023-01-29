const btnStart = document.querySelector('.game_button_start');
document.querySelectorAll('.button')
    .forEach((element) => {
        element.addEventListener('click', function (event) {
            element.style.border = '3px solid red';

            const levelBtn = event.target.textContent;

            console.log(levelBtn);

            window.application.level = levelBtn;
        });
    });

   

    btnStart?.addEventListener('click', () => {
  
        const level = window.application.level;
        console.log(level);
        if (level === '1') {
            
        } else if (level === '2') {
           
        } else if (level === '3') {
           
        } else {
            alert('Выбери сложность');
          
        }
    });