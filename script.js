var currPage = "about";
var currWrapper = "tech";
var projs = ["pianoscribe", "repman", "smartcan", "sonnetify", "heattweet",
             "rose", "nujabes", "hair", "ff", "journey"];
var fadedIn = false;
var fadedOut = true;

var currId = "";
var projectsFadedIn = false;

function changePage(currElem) {
  $("#item-about, #item-projects, #item-resume, #item-contact")
    .removeClass("active");
  currElem.addClass("active");
  $(".container").addClass("hidden");
  var currContainer = currElem.text().toLowerCase();
  $(".".concat(currContainer)).removeClass("hidden");
}

function changeProjectWrapper(currProjectWrapper) {
  $("#item-project-tech, #item-project-music, #item-project-art")
    .removeClass("active");
  currProjectWrapper.addClass("active");
  $("#wrapper-tech, #wrapper-music, #wrapper-art").addClass("hidden");
  var currProjectPage = currProjectWrapper.text();
  $("#wrapper-".concat(currProjectPage)).removeClass("hidden");
}

function bindMainNavElems() {
  $("#item-about, #item-projects, #item-resume, #item-contact")
  .click( function() {
    var thisPage = $(this).text();
    if(currPage !== thisPage) {
      currPage = thisPage;
      changePage($(this));
    }
  });
}

function bindProjectNavElems() {
  $(".item.project").click( function() {
    var thisWrapper = $(this).text();
    if(currWrapper !== thisWrapper) {
      currWrapper = thisWrapper;
      changeProjectWrapper($(this))
    }
  });
}

function resizeThumbs() {
  $(".thumb").css("height", $(".thumb").width * .75);
}

function fadeBack(thumb, proj) {
  if (proj === "rose") {
    thumb.stop(true, false).fadeTo(250, .9);
    thumb.fadeTo(250, .9);
  } else if (proj === "smartcan") {
    thumb.stop(true, false).fadeTo(250, .92);
    thumb.fadeTo(250, .92);
  } else {
    thumb.stop(true, false).fadeTo(250, 1);
    thumb.fadeTo(250, 1);
  }
}

function onHoverIn(i) {
  return function() {
    var currOverlay = "#proj-".concat(projs[i]).concat("-overlay");
    $(currOverlay).removeClass("hidden");
    $(currOverlay).stop(true, false).fadeTo(300, 1);
    // $(currOverlay).fadeTo(300, 1);
    // $(".thumb").stop(true, false).fadeTo(300, .6);
    // $(".thumb").fadeTo(300, .6);
  }
}

function onHoverOut(i) {
  return function() {
    // fadeBack($(this), projs[i]);
    console.log("triggered");
    var currOverlay = "#proj-".concat(projs[i]).concat("-overlay");
    $(currOverlay).stop(true, false);
    $(currOverlay).fadeTo(250, 0, function() {
      $(currOverlay).addClass("hidden");
    });
  }
}

function fadeInProjDetails(id) {
  $(id).removeClass("hidden").fadeTo(300, 1);
}

function onProjClick(i) {
  return function() {
    var id = "#proj-".concat(projs[i]).concat("-details");
    currId = id;
    console.log(currId);
    $(".page-overlay").removeClass("hidden").fadeTo(300, 1, function() {
      setTimeout( function() {
        fadeInProjDetails(id);
      }, 200);
    });
  }
}

function bindThumbsOnHover() {
  for (var i = 0; i < projs.length; i++) {
    var currProj = "#proj-".concat(projs[i]);
    $(currProj).hover( 
      onHoverIn(i), onHoverOut(i)
    );
    $(currProj).click(
      onProjClick(i)
    );
  }
}

function bindCloseBtn() {
  $(".proj-details").hover(
    function() {
      $(".close-btn").stop(true, false).removeClass("hidden").fadeTo(250, 1);
    }, function() {
      $(".close-btn").stop(true, false).addClass("hidden").fadeTo(250, 0);
  });
  $(".close-btn").click( function() {
    console.log(currId);
    $(currId).stop(true, false).fadeTo(200, 0, function() {
      $(currId).addClass("hidden");
    });
    $(".page-overlay").stop(true, false).fadeTo(250, 0, function() {
      $(".page-overlay").addClass("hidden");
    });
  });
  $(".page-overlay").click( function() {
    console.log(currId);
    $(currId).stop(true, false).fadeTo(200, 0, function() {
      $(currId).addClass("hidden");
    });
    $(".page-overlay").stop(true, false).fadeTo(250, 0, function() {
      $(".page-overlay").addClass("hidden");
    });
  })
}

function fadeInElementsForDramaticEffect() {
  // feel so pretentious man
  setTimeout( function() {
    $(".navbar").fadeTo(800, 1, function() {
      setTimeout( function() {
        $("#main-pic").fadeTo(1800, 1, function() {
          $(".main-content").fadeTo(800, 1);
        });
      }, 300);
    });
  }, 750);
}

$(document).ready( function() {
  window.onload = fadeInElementsForDramaticEffect;
  fadeInElementsForDramaticEffect();
  bindMainNavElems();
  bindProjectNavElems();
  resizeThumbs();
  bindThumbsOnHover();
  bindCloseBtn();
});

































