
document.addEventListener('DOMContentLoaded', function () {
    const bar=document.getElementById('#bar')
    // const moreLink = document.getElementById('moreLink')
    // const sidebar = document.getElementById('sidebar')
    const closeSidebar = document.getElementById('closeSidebar')
  
    bar.addEventListener('click', function () {
      sidebar.classList.toggle('open')
    })
  
    closeSidebar.addEventListener('click', function () {
      sidebar.classList.remove('open')
    })
  })