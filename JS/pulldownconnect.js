//職種選択
$(function(){
    var $children_default = $('.children');
    var original = $children_default.html();

    $('.parent').change(function() {
        var $children = $("#children");
        var val1 = $(this).val();
        $children.html(original).find('option').each(function() {
            var val2 = $(this).data('val');
            if (val1 != val2) {
                $(this).remove();
            }
        });
        if ($(this).val() === '') {
            $children.attr('disabled', 'disabled');
        } else {
            $children.removeAttr('disabled');
        }
    });
});