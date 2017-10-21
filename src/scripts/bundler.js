$(function() {

    let liString = `<li>
        Item:<input class="item">
        <p>Quantity:<input class="count"></p>
      </li>`;
    
    $("#confirmButton").on("click", function() {
        $("#secondPart").toggle(500);
        $("#firstPart").toggle(500);
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