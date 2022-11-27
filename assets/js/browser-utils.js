libs = {
    'html2canvas': importScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'),
    'console.image': importScript('https://cdn.rawgit.com/adriancooney/console.image/c9e6d4fd/console.image.min.js'),
    
}


function importScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.head.appendChild(script);
    return script;
}

async function getPlotCanvas(item) {
    const result = await html2canvas(item);
    var image = result.toDataURL("image/png");
    console.image(image);
    return result;

}


async function getCanvasByClassName(name) {
    var item = document.getElementsByClassName(name)[0];
    var cv = await html2canvas(item);
    return cv;
}


async function getCanvasById(id) {
    var item = document.getElementById(id)[0];
    var cv = await html2canvas(item);
    return item;
}

function getPlotCanvasByClassName(name) {
    var item = document.getElementsByClassName(name)[0];
    html2canvas(item).then(function (canvas) {
        var image = canvas.toDataURL("image/png");
        console.image(image);
    });
}