
// Onloads
$('document').ready(
    function() {
        // Onclicks
        $('#giki-try-me').click(function() { slideToggle(this); });
    }
);
        
        
        
        
        
        
        
function slideToggle(obj)
{
    var width = $(obj).css('width') === '90px' ? 535 : 90;

    $(obj).animate(
        {
            'width' : width
        },
        2000
    );
    
}