var notifyMe = {
  emailRegex: /\w+@\w+\.\w+/,
  buttonSubmitText: 'Saving...',
  
  emailFieldHintText: function() {
    var textInput = $('#subscribe form input[type=text]');
    textInput.data('originalVal', textInput.val());
    textInput.focus(function(e) {
      if ($(this).val() == textInput.data('originalVal')) {
        $(this).val('');
      }
    });
    textInput.blur(function(e) {
      if ($(this).val() == '') {
        $(this).val(textInput.data('originalVal'));
      }
    });
  },
  
  disableSubmitUntilValid: function() {
    var _this = this;
    var submitButton = $('#subscribe form input[type=submit]');
    submitButton.attr('disabled', true);
    var textInput = $('#subscribe form input[type=text]');
    textInput.bind('keypress', function(e) {
      if ($(this).val().match(_this.emailRegex)) {
        submitButton.attr('disabled', false);
      } else {
        submitButton.attr('disabled', true);
      }
    });
  },
  
  submitForm: function() {
    var _this = this;
    $('#subscribe form').bind('submit', function(e) {
      $(this).find('input[type=submit]').val(_this.buttonSubmitText);
    });
  }
};


$(function() {
  notifyMe.emailFieldHintText();
  notifyMe.disableSubmitUntilValid();
  notifyMe.submitForm();
});