

const mobileNav = () => {

    /* selecting the 3-bar button element, use CSS naming convention.
    - const headerBtn" stores the element in a constant (never changes and can't be modified) variable. 
    - A variable is a "box" to move stuff/results etc. If not declaring const, we have to use the resulting value right away.
    - Other variables include 'let' and 'var' but var is outdated unless old javascript
    - document is an "object" with predefined functions. Predifined functions is a method such as, querySelector*/

    const headerBtn = document.querySelector('.header__mobilenavbaricon'); 
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link'); /*this needed to clicking on links. querySelectorAll selector all div elements with name */

    /*let variable below is a 'state' to check if nav is open (need it to enable nav toggle/close) */
    let isMobileNavOpen = false;
    console.log(isMobileNavOpen);

    /* declaring an 'click event' which does something by trigger (when the element is clicked on).
    addEventListener takes two arguments, type of event and callback func. listens for when a button is clicked.
    click = event /  '() => {}' is called anonymous arrow function. code inside brackets will execute on click trigger. 
    - brackets is where we change the default header from display:none to display:visbile */

    /*be sure first parameter has 'click' has quotes*/

    headerBtn.addEventListener('click', () => {
        isMobileNavOpen =!isMobileNavOpen; /*after defining the let above write this. ! is logical knot operator inverts true or false-ness of a value. When assigned as !false this = true */
        
        if (isMobileNavOpen) { /*code inside () is condition. Code inside brackets here runs if isMobileNavOpen = true */
            mobileNav.style.display = 'flex'
            document.body.style.overflowY = 'hidden' /*document calls the html body, hidden overflowY disables scrolling when mobile nav is open*/
        } else { /*else runs if isMobileNavOpen = false */
            mobileNav.style.display = 'none'
            document.body.style.overflowY = 'auto'
        }
        console.log(isMobileNavOpen);
    }); 

    mobileLinks.forEach(link => { /*need to run a forEach to loop over link anchors. Link is 1st parameter. if more than 1 parameter use parethesis (Link, 2nd parameter) */
        link.addEventListener('click', () => { /*this event means to look for clicks, like above- but this time run over each item since ForEach. {} is the action */
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto'; /*fixes scrolling after clicking */
        }); 
    }); 
};

    /*make sure to import JS file. Add a parent/container class of const mobileNav = () => { put all code here}
    add export below be brackets */

    export default mobileNav;

    


    /*then must add "import mobileNav from './utils/mobile-nav';" to main.js.
     then call it with mobile(); after the import line
     
     
     NOTE CANNOT CALL THIS mobile-nav.js directly in HTML, needs to go to main.js first, then call the main in script below bottom*/
