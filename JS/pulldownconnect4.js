//職種選択
$(function(){
    var $children4_default = $('.children4');
    var original = $children4_default.html();

    $('.parent4').change(function() {
        var $children4 = $("#children4");
        var val1 = $(this).val();
        $children4.html(original).find('option').each(function() {
            var val2 = $(this).data('val');
            if (val1 != val2) {
                $(this).remove();
            }
        });
        if ($(this).val() === '') {
            $children4.attr('disabled', 'disabled');
        } else {
            $children4.removeAttr('disabled');
        }
    });
});