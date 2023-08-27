document.addEventListener('DOMContentLoaded', function () {
  const knowMoreBtn = document.getElementById('know-more-btn')
  const popUp = document.querySelector('.pop-up')
  const button = document.getElementById('osef-btn');
  const vid = document.querySelector('video')
  const brandLinks = document.querySelector('.pop-up .brand-links')
  const rainContainer = document.getElementById('rain-container');
  const closeBtn = document.getElementById('close-btn');
  const myBody = document.querySelector('body')
  const titleSocial = document.querySelector('h3')

  button.addEventListener('mouseenter', () => {
    vid.classList.add('active')
    vid.play();
  });

  knowMoreBtn.addEventListener('click', () => {
    popUp.classList.add('active')
    brandLinks.style.display = 'flex'
  });

  closeBtn.addEventListener('click', () => {
    popUp.classList.remove('active')
    brandLinks.style.display = 'none'
  });
  
  knowMoreBtn.addEventListener('mouseenter', () => {
    createSmileysWithDelay()
  });
  
  button.addEventListener('focus', () => {
    vid.classList.add('active')
    vid.play();
  });
  
  knowMoreBtn.addEventListener('focus', () => {
    createSmileysWithDelay()
  });
  
  button.addEventListener('mouseleave', () => {
    vid.classList.remove('active')
  });

  function createSmileysWithDelay() {
    const smileyCount = 30;
    const delayBetweenSmileys = 200; // Délai en millisecondes entre chaque apparition

    let smileyIndex = 0;

    const createNextSmiley = () => {
      if (smileyIndex < smileyCount) {
        const smiley = document.createElement('div');
        smiley.classList.add('smiley');

        const smileySize = Math.random() * 70 + 10; // Taille aléatoire entre 10px et 30px
        smiley.style.width = `${smileySize}px`;
        smiley.style.height = `${smileySize}px`;

        smiley.style.left = `${Math.random() * 100}vw`;
        rainContainer.appendChild(smiley);

        smileyIndex++;

        smiley.addEventListener('animationend', () => {
          smiley.remove();
        });

        setTimeout(createNextSmiley, delayBetweenSmileys);
      }
    };

    createNextSmiley();
  }

  /* Lottie & badge */
  const player = document.querySelector("lottie-player");
  const badge = document.querySelector('.badge-wrapper')

  button.addEventListener('click', () => {
    player.style.display = "block";
    player.play();
    button.classList.add('disabled');
    badge.classList.add('animated')

    setTimeout(() => {
      myBody.classList.add('bg-badge')
    }, 4900)
    // Cacher l'animation après la fin de l'animation
    player.addEventListener('complete', () => {
      player.style.display = "none";
    });
  })

  
});
