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

    // Get references to the arrow buttons, textbox head, textbox paragraph, and exp image
    const arrowLeft = document.querySelector('.arrow-l');
    const arrowRight = document.querySelector('.arrow-r');
    const textBoxHead = document.querySelector('.textbox-head');
    const textBoxP = document.querySelector('.textbox-p');
    const expImage = document.querySelector('.exp img');

    // Define the content arrays for the textbox head, textbox paragraph, and exp image
    const textBoxHeadContent = ['DEVFEST KOLKATA 2023', 'REBASE', ' '];
    const textBoxPContent = [
        'I designed this website as a part of the organizing team of Devfest Kolkata 2023.',
        'I designed this website as a part of the organizing team of Rebase. Took me a long long time T-T',
        'You can find all my other design projects on my Dribble and Behance <3 All my coding projects are available on my Github, including the repo for this website ;)'
    ];
    const expImageSrc = [
        'assets/images/exp1.png',
        'assets/images/exp2.png',
        'assets/images/exp3.png'
    ];

    // Initialize the index to track the current content
    let currentIndex = 0;

    // Function to update the content based on the current index
    function updateContent() {
        textBoxHead.textContent = textBoxHeadContent[currentIndex];
        textBoxP.textContent = textBoxPContent[currentIndex];
        expImage.src = expImageSrc[currentIndex];
    }

    // Event listener for the left arrow button
    arrowLeft.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + textBoxHeadContent.length) % textBoxHeadContent.length;
        updateContent();
    });

    // Event listener for the right arrow button
    arrowRight.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % textBoxHeadContent.length;
        updateContent();
    });

    // Initial content update
    updateContent();

