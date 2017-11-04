var gridElement = document.getElementsByClassName('grid');
var gridNumber = 1;

function createGrid(x) {
    while (document.querySelectorAll('.grid').length > 0) {
        document.querySelector('#container').removeChild(document.querySelector('.grid'));
    }
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++)
           document.querySelector('#container').appendChild(document.createElement('div')).classList.add('grid');
    }
    
    var gridElement = document.getElementsByClassName('grid');
    var gridElementSize = 960/x;
    var gESstr = gridElementSize.toString().concat('px');
    
    for (var i = 0; i < gridElement.length; i += 1){
        gridElement[i].style.width = gESstr;
        gridElement[i].style.height = gESstr;
        gridElement[i].style.opacity = 1;
        gridElement[i].addEventListener('mouseover', (e) => {
            var opacity = event.target.style.opacity
            event.target.style.backgroundColor = 'rgba(0, 0, 0, 1)';
            event.target.style.opacity = Math.max(opacity - 0.1, 0);
//            event.target.style.opacity = Math.floor(event.target.style.opacity*0.9);
            console.log(opacity);
            console.log(event.target.style.opacity);
         
//            bgColor <- event.target.style.backgroundColor;
            
        });
    }
}

function hsl_col_perc(percent, start, end) {
    var a = percent / 100,
        b = (end - start) * a,
        c = b + start;
    return 'hsl('+c+', 0%, 100%)';
}