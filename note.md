HTML

<header>
        <div class="navbar">
            <div class="logo">
                <a href="#">Web dev creative</a>
            </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <a href="#" class="action-btn">Get started </a>

            <div class="toggle-btn">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>

        <div class="dropdown-menu open">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="#" class="action-btn">Get started </a></li>
        </div>
    </header>




DROPDOWN

<div class="dropdown-menu open">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="#" class="action-btn">Get started </a></li>
        </div>



JS

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}