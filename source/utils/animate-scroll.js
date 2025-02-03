

const animateScroll = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } // else {                                  /*activating this will show/reappear elements every time the exit viewport */
            //     entry.target.classList.remove('show');
            // }
        });
    });
    
    const hiddenElements = document.querySelectorAll('.scroll');
    hiddenElements.forEach((el) => observer.observe(el));
}
console.log('animate bish')
export default animateScroll;
