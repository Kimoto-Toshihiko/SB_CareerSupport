//職種選択
$(function(){
    var $children5_default = $('.children5');
    var original = $children5_default.html();

    $('.parent5').change(function() {
        var $children5 = $("#children5");
        var val1 = $(this).val();
        $children5.html(original).find('option').each(function() {
            var val2 = $(this).data('val');
            if (val1 != val2) {
                $(this).remove();
            }
        });
        if ($(this).val() === '') {
            $children5.attr('disabled', 'disabled');
        } else {
            $children5.removeAttr('disabled');
        }
    });
});