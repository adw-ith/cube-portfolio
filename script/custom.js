function disappear()
{
    document.getElementById('logo-container').style.opacity='0';
    document.getElementById('logo-container').style.pointerEvents = 'none';
    document.getElementById('about-container').style.opacity='0';
    document.getElementById('about-container').style.pointerEvents = 'none';
    document.getElementById('projects-container').style.opacity='0';
    document.getElementById('projects-container').style.pointerEvents = 'none';
    document.getElementById('blogs-container').style.opacity='0';
    document.getElementById('blogs-container').style.pointerEvents = 'none';
    document.getElementById('gallery-container').style.opacity='0';
    document.getElementById('gallery-container').style.pointerEvents = 'none';
    document.getElementById('contact-container').style.opacity='0';
    document.getElementById('contact-container').style.pointerEvents = 'none';
}

const front = document.getElementById('front');
const main = document.getElementById('logo-container');

const back = document.getElementById('back');
const profile = document.getElementById('about-container');

const tops = document.getElementById('top');
const work = document.getElementById('projects-container');

const bottom = document.getElementById('bottom');
const blog = document.getElementById('blogs-container');

const left = document.getElementById('left');
const contact = document.getElementById('contact-container');

const right = document.getElementById('right');
const gallery = document.getElementById('gallery-container');
 
const abouts = document.getElementById("about");
const blogs = document.getElementById("blog")
const works = document.getElementById("work")
const gallerys = document.getElementById("gallery")
const contacts = document.getElementById("contact")

front.addEventListener("click",() => {
    main.style.opacity='1';
    main.style.pointerEvents='auto';
})


back.addEventListener("click",() => {
    profile.style.opacity='1';
    profile.style.pointerEvents='auto';
})


abouts.addEventListener("click",() => {
    profile.style.opacity='1';
    profile.style.pointerEvents='auto';
})

tops.addEventListener("click",() => {
    work.style.opacity='1';
    work.style.pointerEvents='auto';
})

works.addEventListener("click",() => {
    work.style.opacity='1';
    work.style.pointerEvents='auto';
})

bottom.addEventListener("click",() => {
    blog.style.opacity='1';
    blog.style.pointerEvents='auto';
})

blogs.addEventListener("click",() => {
    blog.style.opacity='1';
    blog.style.pointerEvents='auto';
})

left.addEventListener("click",() => {
    contact.style.opacity='1';
    contact.style.pointerEvents='auto';
})

contacts.addEventListener("click",() => {
    contact.style.opacity='1';
    contact.style.pointerEvents='auto';
})

right.addEventListener("click",() => {
    gallery.style.opacity='1';
    gallery.style.pointerEvents='auto';
})

gallerys.addEventListener("click",() => {
    gallery.style.opacity='1';
    gallery.style.pointerEvents='auto';
})

