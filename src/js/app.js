document.getElementById('mobile-menu').addEventListener('click', function() {
    var linkList = document.querySelector('.link-list');
    this.classList.toggle('open');
    linkList.classList.toggle('show');
});