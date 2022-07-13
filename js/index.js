let readMore = document.getElementById('readMoreButton');
readMore.addEventListener('click', function(e) {
    if (e.target.innerText == 'Read more...') {
        e.target.innerText = 'Read less...';
    } else {
        e.target.innerText = 'Read more...';
    }
})