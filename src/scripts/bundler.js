$(function() {

    let liString = `<li>
        Item:<input class="item">
        <p>Quantity:<input class="count"></p>
      </li>`;

    function changeView() {
        $("#secondPart").toggle(500);
        $("#firstPart").toggle(500);
    }
    
    $("#backButton").on("click", function() {
       changeView();
    });

    $("#BundleName").on("keypress", function(event) {
        if (event.which == 13) {
            changeView();
        }
    })

    $("#confirmButton").on("click", function() {
        changeView()
        var bundleName = $("#BundleName").val();
        console.log(bundleName);
    });
    
    $("#addButton").on("click", function() {
        $("#bundleList").append(liString);
    });

    $("#removeButton").on("click", function() {
        $("#bundleList").children().last().remove();
    })
});