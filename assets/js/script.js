/**
 * Created by Sayantan Bakshi on 19-02-16.
 */
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

$('[data-validate]').focus(function () {
    $('body').append('<span class="validate-message"><ul><li id="erralphanumericonly">Characters other than a-z, A-Z, 0-9 are not supported</li><li id="erralphanumericspecialonly">Characters other than a-z, A-Z, 0-9, !@#$%^+-_. are not supported</li><li id="errmin5">Must have 5 or more characters</li><li id="errmin8">Must have 8 or more characters</li><li id="errmustformatcap">Password must contain atleast 1 capital letter</li><li id="errmustformatspecial">Password must contain atleast 1 special character. Supported special characters: !@#$%^+-_</li><li id="errpassmustmatch">Passwords must match</li></ul></span>');
    pos = $(this).offset();
    $('.validate-message').css('left', pos.left);
    $('.validate-message').css('top', pos.top + 43);
    $('.validate-message').css('width', $(this).outerWidth());
    $(this).keyup();
});
$('[data-validate]').focusout(function () {
    $('.validate-message').remove();
});
$('[data-validate]').keyup(function () {
    expuname = /([^A-Za-z0-9])/g;
    exppasscap = /([A-Z])/g;
    exppass = /([^A-Za-z0-9!@#$%\^+\-_.])/g;
    exppassspecial = /([!@#$%\^+\-_.])/g;
    switch ($(this).attr('data-validate')) {
        case 'username':
            if ($(this).val().match(expuname)) {
                $('#erralphanumericonly').show()
            } else {
                $('#erralphanumericonly').hide()
            }
            if ($(this).val().length < 5) {
                $('#errmin5').show()
            } else {
                $('#errmin5').hide()
            }
            break;
        case 'password':
            if ($(this).val().length < 8) {
                $('#errmin8').show()
            } else {
                $('#errmin5').hide()
            }
            if ($(this).val().match(exppass)) {
                $('#erralphanumericspecialonly').show()
            } else {
                $('#erralphanumericspecialonly').hide()
            }
            if ($(this).val().match(exppasscap)) {
                $('#errmustformatcap').hide()
            } else {
                $('#errmustformatcap').show()
            }
            if ($(this).val().match(exppassspecial)) {
                $('#errmustformatspecial').hide()
            } else {
                $('#errmustformatspecial').show()
            }
            break;
        case 'repassword':
            if ($(this).val() != $('[data-validate=password]').val()) {
                $('#errpassmustmatch').show()
            } else {
                $('#errpassmustmatch').hide()
            }
            break;
        default:
            return true;
    }
});