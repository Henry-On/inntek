
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
if (document.querySelector('.wrapper-testimonies')) {
  const track = document.querySelector('.wrapper-testimonies');
  const viewport = document.querySelector('.viewport');
  const dotsContainer = document.querySelector('.carousel-indicators');

  let realSlides = Array.from(track.children);
  const realCount = realSlides.length;

  // Number of visible context slides needed on each side
  const BUFFER = 3;

  // --- CLONE ---
  const headClones = realSlides.slice(-BUFFER).map(n => n.cloneNode(true));
  const tailClones = realSlides.slice(0, BUFFER).map(n => n.cloneNode(true));

  headClones.forEach(n => track.prepend(n));
  tailClones.forEach(n => track.append(n));

  let slides = Array.from(track.children);

  // Logical index (real slide index)
  let index = 0;

  // Physical index (offset by buffer)
  let physicalIndex = BUFFER;

  // --- DOTS ---
  for (let i = 0; i < realCount; i++) {
    const dot = document.createElement('span');
    dot.className = 'indicator';
    dot.addEventListener('click', () => {
      index = i;
      physicalIndex = i + BUFFER;
      update();
    });
    dotsContainer.appendChild(dot);
  }

  const dots = Array.from(dotsContainer.children);

  // --- HELPERS ---
  function cardWidth() {
    return slides[0].getBoundingClientRect().width;
  }

  function centerOffset() {
    return viewport.offsetWidth / 2 - cardWidth() / 2;
  }

  // --- UPDATE ---
  function update(animate = true) {
    slides.forEach(s => s.classList.remove('active'));

    const activeSlide = slides[physicalIndex];
    activeSlide.classList.add('active');

    dots.forEach((d, i) =>
      d.classList.toggle('active', i === index)
    );

    if (!animate) track.style.transition = 'none';
    else track.style.transition = 'transform 0.45s ease';

    const offset =
      physicalIndex * cardWidth() - centerOffset();

    track.style.transform = `translateX(${-offset}px)`;
  }

  // --- LOOP FIX ---
  track.addEventListener('transitionend', () => {
    if (physicalIndex >= realCount + BUFFER) {
      physicalIndex = BUFFER;
      update(false);
    }

    if (physicalIndex < BUFFER) {
      physicalIndex = realCount + BUFFER - 1;
      update(false);
    }
  });

  // --- AUTOPLAY ---
  setInterval(() => {
    index = (index + 1) % realCount;
    physicalIndex++;
    update();
  }, 4000);

  // --- RESIZE ---
  window.addEventListener('resize', () => update(false));

  // INIT
  update(false);

}