
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelector('.active-btn');
            if (currentBtn) {
                currentBtn.classList.remove('active-btn');
            }
            this.classList.add('active-btn');
        });
    }

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

        if (id) {
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            });

            e.target.classList.add('active'); // Fix the typo here, change tatrget to target

            sections.forEach((section) => {
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
}

PageTransitions();

