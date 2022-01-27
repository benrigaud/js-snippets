// Stick when top
const stickThis = document.querySelector(".element-class");
const startPosition = stickThis.getBoundingClientRect().top + window.pageYOffset;
window.onscroll = function() {
    if (window.pageYOffset > startPosition) {
        stickThis.classList.add('stick');
    } else {
        stickThis.classList.remove('stick');
    }
}

// Scroll into view with offset
function scrollIntoView(e) {
    e.preventDefault();
    const target = document.querySelector('.target-class');
    const offset = 95;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Get youtube thumbnails
const iframe = document.querySelector('iframe')
const iframeSrc = iframe.getAttribute('src')
const youtubeVideoId = iframeSrc.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop()
const videoThumbnail = `<img src="//img.youtube.com/vi/${youtubeVideoId}/0.jpg">`
document.querySelector(`.video-thumbnail`).innerHTML = videoThumbnail