console.log("Mustali")
let section3 = document.getElementById("theexclusive");
let image1 = document.getElementById("firstimage");
let image2 = document.getElementById("secondimage");
let image3 = document.getElementById("thirdimage");
window.addEventListener("scroll", scroll1)
window.addEventListener("scroll", scroll2)
window.addEventListener("scroll", scroll3)
window.addEventListener("scroll", scroll4)
function scroll1()
{
  let mark = window.scrollY
  let start = section3.offsetTop
  let end = start + section3.offsetHeight
  if (mark >= start && mark <= end)
  {
    section3.classList.add('animate-section3');
  }
  else
  {
    section3.classList.remove('animate-section3');
  }
}
function scroll2()
{
  let mark = window.scrollY
  let start = image1.offsetTop
  let end = start + image1.offsetHeight
  if (mark >= start && mark <= end)
  {
    image1.classList.add('first-image-animate');
  }
  else
  {
    image1.classList.remove('first-image-animate');
  }
}
function scroll3()
{
  let mark = window.scrollY
  let start = image2.offsetTop
  let end = start + image2.offsetHeight
  if (mark >= start && mark <= end)
  {
    image2.classList.add('second-image-animate');
  }
  else
  {
    image2.classList.remove('second-image-animate');
  }
}
function scroll4()
{
  let mark = window.scrollY
  let start = image3.offsetTop
  let end = start + image3.offsetHeight
  if (mark >= start && mark <= end)
  {
    image3.classList.add('third-image-animate');
  }
  else
  {
    image3.classList.remove('third-image-animate');
  }
}