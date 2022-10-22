const header = document.getElementById('header')
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="">';
    title.innerHTML = 'Title'
    excerpt.innerHTML = 'Card content'
    profile_img.innerHTML = '<img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />';
    name.innerHTML = 'John Doe'
    date.innerHTML = 'Oct 20, 2022'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}