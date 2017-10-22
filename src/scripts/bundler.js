$(function() {

    var listCounter = 1;
    let liString = `<li>
        <p>Item:<input class="item"></p>
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
        listCounter ++;
    });

    $("#removeButton").on("click", function() {
        $("#bundleList").children().last().remove();
        if (listCounter > 0) {
            listCounter --;
        }
    })
});