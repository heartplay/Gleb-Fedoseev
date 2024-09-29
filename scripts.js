

const headerInner = document.getElementById('header-inner')
const currentPage = document.getElementById('title')
const pageIndex = parseInt(currentPage.dataset.index)
// const titleTag = document.getElementById('title')
// const titleTag = document.querySelector('head title')

function headerRender() {
  headerInner.insertAdjacentHTML('afterbegin', `<div class="header-inner-left">
  <div class="logo">
    <img src="main-page-avatar.jpg" alt=":(" id="avatar-logo"/> 
    GLEB FEDOSEEV
  </div>
</div>
<div class="header-inner-right">
  <div class="navigation">
    <div class="navigation-btn"><a href="index.html" class="navigation-link${pageIndex === 1 ? '-current-page' : ''}">На главную</a></div>
    <div class="navigation-btn"><a href="calculator.html" class="navigation-link${pageIndex === 2 ? '-current-page' : ''}">Калькулятор</a></div>
    <div class="navigation-btn"><a href="notes.html" class="navigation-link${pageIndex === 3 ? '-current-page' : ''}">Заметки</a></div>
    <div class="navigation-btn"><a href="threejs1.html" class="navigation-link${pageIndex === 4 ? '-current-page' : ''}">Three JS 1</a></div>
    <div class="navigation-btn"><a href="threejs2.html" class="navigation-link${pageIndex === 5 ? '-current-page' : ''}">Three JS 2</a></div>
    
  </div>
</div>`);
}

window.onload = () => {
  headerRender();
};



{/* <div class="navigation-btn"><a href="template2.html" class="navigation-link${pageIndex === 4 ? '-current-page' : ''}">Template 2</a></div> */}






