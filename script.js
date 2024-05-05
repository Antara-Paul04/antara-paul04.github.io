document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

const arrowLeft = document.querySelector('.arrow-l');
const arrowRight = document.querySelector('.arrow-r');
const projectImagesContainer1 = document.querySelectorAll(".project-img1");
const projectImagesContainer2 = document.querySelectorAll(".project-img2");
const projectImagesContainer3 = document.querySelectorAll(".project-img3");
const textBoxHead = document.querySelector('.textbox-head');
const textBoxP = document.querySelector('.textbox-p');
const expImage = document.querySelector('.exp img');

const projectSets = [
    [
        "assets/images/Landing Page.png",
        "assets/images/About Page.png",
        "assets/images/faq.png"
    ],
    [
        "assets/images/Devfest Image 1.png",
        "assets/images/Devfest Image 2.png",
        "assets/images/Devfest Image 3.png"
    ],
    ["","",""]
];

const textBoxHeadContent = ['REBASE','DEVFEST KOLKATA 2023', ' '];
const textBoxPContent = [
    'I designed this website as well as the branding for the hackathon as a part of the organizing team of Rebase. Took me a long long time T-T',
    'I designed this website as a part of the organizing team of Devfest Kolkata 2023.',
    'You can find all my other design projects on my Dribble and Behance <3 All my coding projects are available on my Github, including the repo for this website ;)'
];

const expImageSrc = [
    'assets/images/exp2.png',
    'assets/images/exp1.png',
    'assets/images/exp3.png'
];

let currentIndex = 0;

function updateContent() {
    textBoxHead.textContent = textBoxHeadContent[currentIndex];
    textBoxP.textContent = textBoxPContent[currentIndex];
    expImage.src = expImageSrc[currentIndex];

    const currentProjectSet = projectSets[currentIndex];

    projectImagesContainer1.forEach((container, index) => {
        container.querySelector('img').src = currentProjectSet[index];
    });

    projectImagesContainer2.forEach((container, index) => {
        container.querySelector('img').src = currentProjectSet[index+1];
    });

    projectImagesContainer3.forEach((container, index) => {
        container.querySelector('img').src = currentProjectSet[index+2];
    });
}

arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + textBoxHeadContent.length) % textBoxHeadContent.length;
    updateContent();
});

arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % textBoxHeadContent.length;
    updateContent();
});

// Initial content update
updateContent();
