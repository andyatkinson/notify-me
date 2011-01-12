var notifyMe = {
  emailRegex: /\w+@\w+\.\w+/,
  
  _validEmail: function(e) {
    var self = this;
    return $(e.currentTarget).val().match(self.emailRegex) ? true : false;
  },
  
  emailFieldHintText: function() {
    var self = this;
    var textInput = $('#subscribe form input[type=text]');
    var submitButton = $('#subscribe form button[value=submit]');
    textInput.data('originalVal', textInput.val());
    self.emailElem = textInput;
    textInput.addClass('disabled');
    textInput.select();
    textInput.bind('keypress', function(e) {
      if ($(this).hasClass('disabled')) {$(this).removeClass('disabled');}
    });
    textInput.bind('blur', function(e) {
      if ($(this).val() == '') {
        $(this).val(textInput.data('originalVal'));
        $(this).addClass('disabled');
        if (submitButton.hasClass('enabled')) {submitButton.removeClass('enabled');}
      } else {
        if (self._validEmail(e) && textInput.val() != textInput.data('originalVal')) {
          submitButton.addClass('enabled');
        }
      }
    });
  },
  
  handleSubmit: function(e) {
    var self = this;
    var form = $('form');
    var textInput = form.find('input[type=text]');
    form.bind('submit', function(e) {
      e.preventDefault();
      var val = textInput.val();
      if (val.match(self.emailRegex) && val != textInput.data('originalVal')) {
        var submitButton = form.find('button[value=submit]');
        submitButton.addClass('enabled');
        form.unbind('submit');
        form.submit();
      }
    })
  }
};


$(function() {
  notifyMe.emailFieldHintText();
  notifyMe.handleSubmit();
});