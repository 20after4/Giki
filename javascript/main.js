
// Onloads
$('document').ready(
    function() {
        // Onclicks
        $('#giki-try-me-top').click(function() { slideToggle(this.parentNode); });
        
        //$('#giki-try-me-ta').val($('#giki-content').html());
    
    var giki = new Giki(
            {
                'div'       : 'giki-content',
                'text_area' : 'giki-try-me-ta',
                'parser'    : 'src/bbcode.js'
            }
        ),
        giki2 = new Giki(
            {
                'div'       : 'giki-try-me-div-2',
                'text_area' : 'giki-try-me-ta-2',
                'parser'    : 'src/bbcode.js'
            }
        );
    }
);
        
        
        
        
        
        
        
function slideToggle(obj)
{
    var dir = $(obj).css('width') === '90px' ? true : false,
        width = dir ? 535 : 90;
    
    // Hide textarea
    obj.getElementsByTagName('textarea')[0].style.display = dir ? '' : 'none';

    $(obj).animate(
        {
            'width' : width
        },
        2000
    );
    
}