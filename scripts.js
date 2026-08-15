/** Intersection Observer
 * control the slide effects using intersection observer
 */

const observer = new IntersectionObserver(slide, { threshold: 0.25 });

function slide(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      // uncomment the following line to hide elements when scrolled past
      // entry.target.classList.remove("active");
    }
  });
}

const items = document.querySelectorAll(".item");
items.forEach((item) => observer.observe(item));
