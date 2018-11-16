function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

$(document).ready(function () {
    var grid = "";
    for (var i = 0; i < 12; i++) {
        grid += `<div class="col-1"><div></div></div>`;
    }
    var gridOverlay = `<div class="grid-overlay"><div class="container"><div class="row">${grid}</div></div></div>`;
    $("body").prepend($(gridOverlay));
    $('head').append('<link rel="stylesheet" id="this-is-bs" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">');
    addStyleString(`
    .grid-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    z-index: 100;
    pointer-events: none;
    }
    .grid-overlay .container-fluid,
    .grid-overlay .container,
    .grid-overlay .row {
    height: 100%;
    }
    .grid-overlay .col-1 {
    background-color: #00adef;
    }
    .grid-overlay .col-1 > div {
    height: 100%;
    background-color: #0088c6;
    }`
)

});


