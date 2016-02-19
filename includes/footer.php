<footer>
    <div class="container">
        <span>&copy; 2016. <a href="http://projukti.info" target="_blank">Projukti</a></span>
        <ul class="footerlinks">
            <li><a href="#" target="_blank">Terms & Condition</a></li>
            <li><a href="#" target="_blank">Privacy Policy</a></li>
            <li><a href="#" target="_blank">Contact</a></li>
        </ul>
    </div>
</footer>

<script>
    $('[type=password]').each(function () {
        $this = $(this);
        $this.after('<span class="entypo-eye eye-overlay" data-state="hidden" data-id="' + $this.attr('id') + '" data-class="' + $this.attr('class') + '"></span>');
        $('span[data-id=' + $this.attr('id') + ']').click(function () {
            if ($(this).attr('data-state') == 'hidden') {
                $(this).attr('data-state', 'shown');
                $(this).before('<input class="' + $(this).attr('data-class') + '" id="fake' + $(this).attr('data-id') + '" type="text">');
                $('#' + $(this).attr('data-id')).hide();
                $('#fake' + $(this).attr('data-id')).val($('#' + $(this).attr('data-id')).val());
            } else {
                $(this).attr('data-state', 'hidden');
                $('#' + $(this).attr('data-id')).val($('#fake' + $(this).attr('data-id')).val());
                $('#' + $(this).attr('data-id')).show();
                $('#fake' + $(this).attr('data-id')).remove();
            }
        });
    });
</script>