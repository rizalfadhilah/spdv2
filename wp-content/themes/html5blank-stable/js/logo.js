<!--kepala-->
$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("kepala").removeClass("large").addClass("small");
		$("LG").removeClass("besar").addClass("kecil");
	} else {
		$("kepala").removeClass("small").addClass("large");
		$("LG").removeClass("kecil").addClass("besar");
	}	
});

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(2000, 2000);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}

<!--Search-->
