const items = document.querySelectorAll('#timeline li');

const isViewport = el =>{
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 && 
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight ||
            document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth ||
                document.documentElement.clientWidth)
    );
};

const run = ()=>
items.forEach(item =>{
    if (isViewport(item)) {
        item.classList.add('show')
    }
});

// Events
window.addEventListener('load', run)
window.addEventListener('resize', run)
window.addEventListener('scroll', run)

var myhref = document.getElementById("div");

myhref.addEventListener("click", function() {
    // "myhref" is click. So, uncheck "myfield"
    window.location.href = "../Projeto-2/index.html";
});