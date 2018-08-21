// This must be used in tandem with wikia.css!
var qselect = document.querySelectorAll('.featured-video');
for (var i = qselect.length - 1; i >= 0; i--) {
	qselect[i].innerText = 'There was a Wikia Video \"Ad\" Here. It has be been take care of!';
  qselect[i].hidden = true;
}
