// Export the main initialization function
export function initApp() {
  const cleanups = []

  const workProcedures = document.getElementById("work-procedures")

  if (workProcedures) {

    const containerButtons = workProcedures.querySelector(".container-toggles")
    const buttons = containerButtons.querySelectorAll(".procedure-toggle")
    const containerProcedures = workProcedures.querySelector(".container-stages")
    const procedures = containerProcedures.querySelectorAll(".procedure-stage")

    buttons.forEach((btn, index) => {
      const handleToggleClick = () => centerActiveItem(index)
      const handleProcedureClick = () => centerActiveItem(index)

      btn.addEventListener('click', handleToggleClick)
      procedures[index].addEventListener('click', handleProcedureClick)

      cleanups.push(() => {
        btn.removeEventListener('click', handleToggleClick)
        procedures[index].removeEventListener('click', handleProcedureClick)
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

  const cleanupHeroCarousel = heroCarousel()

  if (cleanupHeroCarousel) {
    cleanups.push(cleanupHeroCarousel)
  }

  return () => {
    cleanups.forEach(cleanup => cleanup())
  }
}

Array.from(document.querySelectorAll("[data-scroll-to]")).forEach(function (e) {
  e.addEventListener("click", (current) => {
    current.preventDefault();
    const section = e.getAttribute("data-scroll-to");
    console.log("scrolling to section:", section);
    if(!section) return;
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  })
});

function heroCarousel() {

  // home page hero carousel
  const carousel = document.querySelector('.hero-carousel')
  if (!carousel) return

  const slides = carousel.querySelectorAll('.carousel-item')
  const slideNames = carousel.querySelectorAll('.slide-name')
  const heroContainer = carousel.closest(".hero-container")
  const slidesBackground = heroContainer.querySelector(".background-overlay")
  const nextButton = carousel.querySelector('.btn-next-slide')
  const prevButton = carousel.querySelector('.btn-prev-slide')

  const slideInterval = 7000; // 7 seconds
  const slideNameHandlers = []

  // attach click event to slide names  
  slideNames.forEach((slideName, index) => {
    const handleSlideNameClick = () => goToSlide(index)
    slideName.addEventListener('click', handleSlideNameClick)
    slideNameHandlers.push([slideName, handleSlideNameClick])
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
    const slideGradientColors = slides[index].getAttribute('data-background-overlay')
    const heroBackgroundImage = slides[index].getAttribute('data-background-image')
    let heroBackgroundImageSet = slides[index].getAttribute('data-background-imageset')
    slidesBackground.style.backgroundColor = `${slideGradientColors}`
    heroContainer.style.backgroundImage = `url(${heroBackgroundImage})`

    heroBackgroundImageSet = heroBackgroundImageSet.split(",");
    const imageSetValue = heroBackgroundImageSet
      .map((url) => `url(${url})`).join(", ");
    // console.log("bg sets", heroBackgroundImageSet);
    heroContainer.style.backgroundImage = `image-set(${imageSetValue})`
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
  nextButton.addEventListener('click', nextSlide)
  prevButton.addEventListener('click', prevSlide)

  // automate carousel sliding
  const intervalId = setInterval(nextSlide, slideInterval)

  return () => {
    slideNameHandlers.forEach(([slideName, handleSlideNameClick]) => {
      slideName.removeEventListener('click', handleSlideNameClick)
    })

    nextButton.removeEventListener('click', nextSlide)
    prevButton.removeEventListener('click', prevSlide)
    clearInterval(intervalId)
  }

}

export default initApp
