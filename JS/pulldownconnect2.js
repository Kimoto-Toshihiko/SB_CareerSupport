//職種選択
$(function(){
    var $children2_default = $('.children2');
    var original = $children2_default.html();

    $('.parent2').change(function() {
        var $children2 = $("#children2");
        var val1 = $(this).val();
        $children2.html(original).find('option').each(function() {
            var val2 = $(this).data('val');
            if (val1 != val2) {
                $(this).remove();
            }
        });
        if ($(this).val() === '') {
            $children2.attr('disabled', 'disabled');
        } else {
            $children2.removeAttr('disabled');
        }
    });
});