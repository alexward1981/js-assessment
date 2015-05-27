exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (item <= arr.length ) {
        if(arr[i] === item) return i;
      } else {
        return -1;
      }
    };
  },

  sum : function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    };
    return sum;
  },

  remove : function(arr, item) {
    var newArray = arr;
    for (var i = 0; i < newArray.length; i++) {
      if (newArray[i] === item) newArray.splice(i, 1)
    };
    return newArray;
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) arr.splice(i, item)
    };
    return arr;
  },

  append : function(arr, item) {
    arr.push(item)
    return arr;
  },

  truncate : function(arr) {
    arr.splice(arr.length -1, 1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
    newArr = arr1.concat(arr2);
    return newArr;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === item) count++
    };
    return count;
  },

  duplicates : function(arr) {
    var sorted_arr = arr.sort();
    var results = [];
    for (var i = 0; i < arr.length; i++) {
      if (sorted_arr[i + 1] === sorted_arr[i]) {
          results.push(sorted_arr[i]);
      }
    }
    return results.filter(function(elem, pos) { return results.indexOf(elem) == pos; });
  },

  square : function(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      result.push(arr[i] * arr[i]);
    };
    return result
  },

  findAllOccurrences : function(arr, target) {
    var results = []
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === target) results.push(i);
    };

    return results;
  }
};
