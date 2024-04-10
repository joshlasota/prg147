$(document).ready(function() {
    var $movable = $('#movable');
    var movementAmount = 20;

    $(document).keydown(function(e) {
        switch(e.which) {
            case 37:
                $movable.stop().animate({ left: '-=' + movementAmount }, 'fast');
                break;
            case 38:
                $movable.stop().animate({ top: '-=' + movementAmount }, 'fast');
                break;
            case 39:
                $movable.stop().animate({ left: '+=' + movementAmount }, 'fast');
                break;
            case 40:
                $movable.stop().animate({ top: '+=' + movementAmount }, 'fast');
                break;
        }
    });

    $('#moveBtn').click(function() {
        $movable.animate({ left: '+=100' }, 'slow')
               .animate({ top: '+=100' }, 'slow', function() {
                   alert('Movement complete!');
               });
    });
});
