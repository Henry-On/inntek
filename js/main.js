
const workProcedures = document.getElementById("work-procedures")

if (workProcedures) {

  const containerButtons = workProcedures.querySelector(".container-toggles")
  const buttons = containerButtons.querySelectorAll(".procedure-toggle")
  const containerProcedures = workProcedures.querySelector(".container-stages")
  const procedures = containerProcedures.querySelectorAll(".procedure-stage")

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      centerActiveItem(index)
    })

    procedures[index].addEventListener('click', () => {
      centerActiveItem(index)
    })
  });

  function centerActiveItem(index) {

    if (!containerButtons || !containerProcedures) return;

    // remove active class from the initial item
    containerButtons.querySelector('.active')?.classList.remove('active');
    containerProcedures.querySelector('.active')?.classList.remove('active');

    const activeToggleItem = buttons[index]
    activeToggleItem.classList.add('active')

    const activeProcedureItem = procedures[index]
    activeProcedureItem.classList.add('active')

    // calculate offset for toggles
    const offsetContainerButtons = activeToggleItem.offsetLeft - (containerButtons.clientWidth / 2) + (activeToggleItem.clientWidth / 2);

    // calculate offset for procedures
    const offsetContainerProcedures = activeProcedureItem.offsetLeft - (containerButtons.clientWidth / 2) + (activeProcedureItem.clientWidth / 2);

    // scroll to center
    containerButtons.scrollTo({ left: offsetContainerButtons, behavior: 'smooth' });
    containerProcedures.scrollTo({ left: offsetContainerProcedures, behavior: 'smooth' });
  }
}

// header menu with childen children
if (document.querySelectorAll('.nav-link.has-children')) {
  const collapedHeight = "0px"
  Array.from(document.querySelectorAll('.nav-link.has-children')).forEach((e) => {
    e.addEventListener("click", () => {
      const children = e.closest(".nav-item").querySelector(".children")
      children.style.height = children.style.height != collapedHeight ? collapedHeight : children.scrollHeight + 'px'
    })
  })
}

// home page hero carousel
const carousel = document.querySelector('.hero-carousel')
if (carousel) {

  const slides = carousel.querySelectorAll('.carousel-item')
  const slideNames = carousel.querySelectorAll('.slide-name')
  const heroContainer = carousel.closest(".hero-container")

  const slidesBackground = document.createElement("DIV")
  slidesBackground.className="carousel-slides-background"
  heroContainer.prepend(slidesBackground)

  const slideInterval = 5000; // 5 seconds

  // attach click event to slide names  
  slideNames.forEach((slideName, index) => {
    slideName.addEventListener('click', () => {
      goToSlide(index)
    })
  })

  // function to go to a specific slide
  const goToSlide = (index) => {
    slides.forEach((slide, i) => {
      // add active class to the current slide and remove from others
      slide.classList.toggle('active', i === index)

      // add active class to the current slide name and remove from others
      slideNames[i].classList.toggle('active', i === index)

    })

    // change to background gradients of the current slide
    const slideGradientColors = slides[index].getAttribute('data-background-gradients')
    const heroBackgroundImage = slides[index].getAttribute('data-background-image')
    slidesBackground.style.backgroundImage=`linear-gradient(${slideGradientColors})`
    heroContainer.style.backgroundImage=`url(${heroBackgroundImage})`
  }

  // function to go to the next slide
  const nextSlide = () => {
    const activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'))
    const nextIndex = (activeIndex + 1) % slides.length
    goToSlide(nextIndex)
  }

  // function to go to the previous slide
  const prevSlide = () => {
    const activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'))
    const prevIndex = (activeIndex - 1 + slides.length) % slides.length
    goToSlide(prevIndex)
  }

  // attach click event to control buttons
  carousel.querySelector('.btn-next-slide').addEventListener('click', nextSlide)
  carousel.querySelector('.btn-prev-slide').addEventListener('click', prevSlide)

  // automate carousel sliding
  setInterval(nextSlide, slideInterval)

}