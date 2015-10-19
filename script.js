var currPage = "about";
var currWrapper = "tech";
var projs = ["pianoscribe", "smartcan", "sonnetify", "heattweet",
             "rose", "nujabes", "hair", "ff", "journey"];
var fadedIn = false;
var fadedOut = true;

function changePage(currElem) {
  $("#item-about, #item-projects, #item-resume").removeClass("active");
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
  $("#item-about, #item-projects, #item-resume").click( function() {
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
    $(currOverlay).fadeTo(300, 1);
    // $(".thumb").stop(true, false).fadeTo(300, .6);
    // $(".thumb").fadeTo(300, .6);
  }
}

function onHoverOut(i) {
  return function() {
    $(".thumb").each(function() {
      // fadeBack($(this), projs[i]);
      var currOverlay = "proj-".concat(projs[i]).concat("-overlay");
      $(currOverlay).stop(true, false).fadeTo(250, 0);
      // $(currOverlay).fadeTo(250, 0);
      $(currOverlay).addClass("hidden");
    });
  }
}

function onProjClick(i) {
  return function() {
    $(".page-overlay").removeClass("hidden").fadeTo(400, 1);
    var id = "#proj-".concat(projs[i]).concat("-details");
    $(".proj-details").removeClass("hidden").attr("id", id);
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

$(document).ready( function() {
  bindMainNavElems();
  bindProjectNavElems();
  resizeThumbs();
  bindThumbsOnHover();
});

































