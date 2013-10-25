
// Indicates pixel limit on how large the square
// containing all the images can be. Determined by
// lesser of window width or height
var sizeLimit = 360;

function centerElement(element){
    $(element).position({
        of: $(element).parent()
    });
}

function sizeImageSets(){
    var sizeLimit = Math.min($(window).width(), $(window).height()) - 100;
    $('.set-container').css({width: sizeLimit, height: sizeLimit});
}

function positionImageSets(){    
    $('.set-container').each(function(){
        centerElement(this);
    });
}

function scrollToBottom(){
    $('html, body').animate({scrollTop: $(document).height()}, 2000);
}

function createNewImageSet(imageArray){
    var page = document.createElement('div');
    page.className = 'page';

    var setContainer = document.createElement('div');
    setContainer.className = 'set-container';

    var imageSet = document.createElement('ul');
    imageSet.className = 'image-set';

    for(var i = 0; i < imageArray.length; i++){
        var li = document.createElement('li');
        li.innerHTML = imageArray[i];
        imageSet.appendChild(li);
    }

    setContainer.appendChild(imageSet);
    page.appendChild(setContainer);
    $('body').append(page);
    
    sizeImageSets();
    positionImageSets();
    scrollToBottom();
}

$(document).ready(function(){
    sizeImageSets();
    positionImageSets();

    $('body').click(function(){
        var x = Math.ceil(Math.random()*100);
        var y = [];
        for(var i = x; i < x+9; i++){
            y.push(i);
        }
        createNewImageSet(y);
    })

});

/*
    We want all the image sets to be resized and
    repositioned if the window is resized, but only
    after a 1 second delay so the browser isn't constantly
    redrawing our boxes.
*/

var windowResizeTimer = null;

$(window).resize(function(){

    if(windowResizeTimer != null)
        window.clearTimeout(windowResizeTimer);

    windowResizeTimer = window.setTimeout(function(){
        sizeImageSets();
        positionImageSets();
        scrollToBottom();
    }, 1000);
});