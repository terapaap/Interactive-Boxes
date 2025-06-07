document.querySelectorAll('.box').forEach(box => {
  const title = box.querySelector('.title');
  title.addEventListener('click', function () {
    box.classList.toggle('expanded');
  });
});
