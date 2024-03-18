/*햄버거 아이콘*/
$(document).ready(function() {
    const menuIcon = $('.menu_icon');
    menuIcon.click(function(e) {
        e.preventDefault();
        menuIcon.toggleClass('active');
    });
});

