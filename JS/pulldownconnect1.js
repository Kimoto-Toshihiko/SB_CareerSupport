//職種選択
$(function(){
    var $children1_default = $('.children1');
    var original = $children1_default.html();

    $('.parent1').change(function() {
        var $children1 = $("#children1");
        var val1 = $(this).val();
        $children1.html(original).find('option').each(function() {
            var val2 = $(this).data('val');
            if (val1 != val2) {
                $(this).remove();
            }
        });
        if ($(this).val() === '') {
            $children1.attr('disabled', 'disabled');
        } else {
            $children1.removeAttr('disabled');
        }
    });
});