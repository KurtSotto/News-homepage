function closeSidebar(){
    const sidebar = document.querySelector(".sidebar")
    const body = document.body
    sidebar.style.display = 'none'
    body.style.backgroundColor = 'transparent'
 }

 function openSidebar(){
     const sidebar = document.querySelector(".sidebar")
     const body = document.body
     sidebar.style.display = 'flex'
     body.style.backgroundColor = 'rgba(0, 0, 0, .1)'

 }