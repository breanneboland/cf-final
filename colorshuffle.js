jQuery.fn.sortDomElements = (function() {
  return function(comparator) {
    return Array.prototype.sort.call(this, comparator).each(function(i) {
      this.parentNode.appendChild(this);
    });
  };
})();

$("#boxes").children().sortDomElements(function(a,b){
  aKey = $(a).attr("sortkey");
  bKey = $(b).attr("sortkey");
  if (aKey == bKey) return 0;
  if (aKey < bKey) return -1;
  if (aKey > bKey) return 1;
});

