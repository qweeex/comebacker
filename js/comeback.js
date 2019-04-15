const comeback = document.querySelector('#comeback'),
      blackClose = document.querySelector('.black-bg'),
      search = document.createElement('div');
search.classList.add('comebak_search');
window.addEventListener('scroll', () => {
    console.log(pageYOffset);
    if (pageYOffset > 500 && getCookie('comback') != '101'){
        document.body.appendChild(search);
        document.cookie = "comback=101";
    }
});
search.addEventListener('mouseover', () => {
   comeback.style.display = 'flex';
});
blackClose.addEventListener('click',  () => {
    comeback.remove();
});
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}