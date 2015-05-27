exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
  count : function (start, end) {
    this.i = 0;
    this.timer = setInterval(this.doCount(start, end), 200);
  },

  doCount : function(s, e) { 
    if(this.i >= s && this.i <= e) {
      return this.i; 
      this.i++
    }
  },

  cancel : function() {
    clearInterval(this.timer);
  }
};
