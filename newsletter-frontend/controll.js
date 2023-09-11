document.getElementById('suc').style.display = 'none';

function f() {
    if (document.getElementById('inp').value.includes('@') && document.getElementById('inp').value.includes('.')) {
        setTimeout(document.getElementById('suc').style.display = 'block', 1250);
        document.getElementById('nwslet').style.display = 'none';

        document.getElementById('inp').value = "";
        document.getElementById('inp').style.borderColor = 'hsl(231, 7 %, 60 %)';
        document.getElementById('inp').style.backgroundColor = 'white';
    }
    else {
        document.getElementById('inp').style.borderColor = 'hsl(4, 100%, 67%)';
        document.getElementById('err').innerHTML = 'Valid email required'
        document.getElementById('inp').style.backgroundColor = 'pink';
        document.getElementById('inp').style.color = 'hsl(4, 100%, 67%)';
    }
}

function dismiss() {
    document.getElementById('suc').style.display = 'none';
    document.getElementById('nwslet').style.display = 'flex';
}