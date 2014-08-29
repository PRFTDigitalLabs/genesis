 var util = {
	mapRange: function(value, srcRange, dstRange) {
	    var adjValue, dstMax, srcMax;
	    if (value < srcRange[0] || value > srcRange[1]) {
	      return NaN;
	    }
	    srcMax = srcRange[1] - srcRange[0];
	    dstMax = dstRange[1] - dstRange[0];
	    adjValue = value - srcRange[0];
	    return (adjValue * dstMax / srcMax) + dstRange[0];
	},
	queue: function(q, result) {
	  if (q.length) {
	    q.shift()(function() {
	      return util.queue(q, result);
	    });
	  } else {
	    return result();
	  }
	}
}

export default = util;