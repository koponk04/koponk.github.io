function toggleReputasiDetail(e){"none"===$("#reputasi-detail").css("display")?($("#reputasi-detail").show(),$(e).html('Tutup  <img src="../assets/img/arrow-up.png"/>')):($("#reputasi-detail").hide(),$(e).html('Selengkapnya  <img src="../assets/img/arrow-down.png"/>'))}function toggleFeedback(){var e="true"===$("#profile-feedback").attr("aria-hidden");$("#profile-feedback").attr("aria-hidden",!e),$(document.body).toggleClass("o-hidden")}