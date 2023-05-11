function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length) {
      const windowMetade = window.innerHeight * 0.7;
  
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = (sectionTop - windowMetade) < 0;
          if(isSectionVisible)
            section.classList.add('ativo');
          else 
            section.classList.remove('ativo');
        })
      }
  
      animaScroll();
  
      window.addEventListener('scroll', animaScroll);
    }
}
initAnimacaoScroll();


function initScroll() {
  const linkInterno = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollSuave(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
  })
  }

  linkInterno.forEach((link) => {
    link.addEventListener('click', scrollSuave);
  })
}
initScroll()

