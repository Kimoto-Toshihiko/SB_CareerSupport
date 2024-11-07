//職種選択
$(function(){
    var $children3_default = $('.children3');
    var original = $children3_default.html();

    $('.parent3').change(function() {
        var $children3 = $("#children3");
        var val1 = $(this).val();
        $children3.html(original).find('option').each(function() {
            var val2 = $(this).data('val');
            if (val1 != val2) {
                $(this).remove();
            }
        });
        if ($(this).val() === '') {
            $children3.attr('disabled', 'disabled');
        } else {
            $children3.removeAttr('disabled');
        }
    });
});