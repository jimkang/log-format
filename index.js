function logFormat() {
  var params = Array.prototype.slice.call(arguments);
  var formatted = '';
  for (var i = 0; i < arguments.length; ++i) {
    if (formatted.length > 0) {
      formatted += ' ';
    }
    var arg = arguments[i];
    if (typeof arg === 'string') {
      formatted += arg;
    }
    else if (typeof arg === 'object') {
      formatted += JSON.stringify(arg);
    }
    else {
      formatted += arg.toString();
    }
  }

  formatted += '\n';
  return formatted;
}

module.exports = logFormat;
