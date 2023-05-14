$(document).ready(function() {

    //activate wow.js
    // new WOW().init();

    //activate fullpage.js
    $('#main').fullpage({
        scrollBar: true,
        navigation: true,
        navigationTooltips: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'],
        loopBottom: true,
        sectionSelector: 'section',
        passive: false
    });

    //apply color to each section from array
    int = -1;
    color_array = ['#1abc9c','#c0392b','#9b59b6','#3498db'];

    $('section').each(function(){
        int++
        $(this).addClass('grid-item-' + int).css('background-color', color_array[int]);
    });

});