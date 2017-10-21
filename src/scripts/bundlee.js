$(function()
{
    $('.scroll-pane').jScrollPane;
    function changeView() {
        $('.firstView').toggle(500);
        $('.secondView').toggle(500);
    }
    $('#searchBtn').on('click', function() {
        changeView();
    })
});