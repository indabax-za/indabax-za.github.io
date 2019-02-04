CATEGORY_TO_ICON = {
    'Theory': "ion-ios-book",
    "Natural language processing": "ion-android-chat",
    "Lightning talk": "ion-flash",
    "Vision": "ion-eye",
    "Speech": "ion-mic-a",
    "Application": "ion-settings"
};

INFO = {
};

PANEL = [

];

KEYNOTE = "Dr. Jacques Ludik";

ORGANIZERS = {
    'Maria Schuld':
    {
        imagePath: './assets/organiser_data/maria_schuld/image.jpg'
    },
    'Steve James':
    {
        imagePath: './assets/organiser_data/steve_james/image.jpg'
    },
    'Christopher Currin':
    { 
        imagePath: './assets/organiser_data/christopher_currin/image.jpg',
        linkInfoPath: './assets/organiser_data/christopher_currin/link.txt',
        link: 'https://github.com/chris-currin'
    },
    'James Allingham':
    { 
        imagePath: './assets/organiser_data/james_allingham/image.jpg',
        linkInfoPath: './assets/organiser_data/james_allingham/link.txt',
        link: 'https://jamesallingham.co.za/'
    },
    'Sicelukwanda Zwane':
    {
        imagePath: './assets/organiser_data/sicelukwanda_zwane/image.jpg'
    },
    'Amira Abbas':
    {
        imagePath: './assets/organiser_data/amira_abbas/image.jpg'
    },
    'Sasha Naidoo':
    {
        imagePath: './assets/organiser_data/sasha_naidoo/image.jpg'
    },
    'Alex Conway':
    { 
        imagePath: './assets/organiser_data/alex_conway/image.jpg',
        linkInfoPath: './assets/organiser_data/alex_conway/link.txt',
        link: 'https://github.com/alexcnwy'
    }
    // 'Elan Van Biljon':
    // { 
    //     imagePath: './assets/organiser_data/elan_van_biljon/image.jpg',
    //     linkInfoPath: './assets/organiser_data/elan_van_biljon/link.txt',
    //     link: 'https://elanvb.github.io/CV/'
    // }       
};

SPONSORS = [ 
    [ './assets/images/sponsors/deeplearningindaba_com.png',
        'http://www.deeplearningindaba.com' ],
    [ './assets/images/sponsors/ukzn_ac_za.png',
        'http://www.ukzn.ac.za' ]
];
/*
 * Change Navbar color while scrolling
 */

$(window).scroll(function(){
    handleTopNavAnimation();
});

$(window).load(function(){
    handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

    if(top>10){
        $('#site-nav').addClass('navbar-solid');
    } else {
        $('#site-nav').removeClass('navbar-solid');
    }
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/*
 * SmoothScroll
 */

smoothScroll.init();

/*
 * Add Speakers to html
 */

function populateSpeakerInfo(info) {
    var count = 0;
    var $row_div;

    // add info to speakers section
    for(speaker in info) {
        if(info[speaker].imagePath == null || speaker.toUpperCase() == "MORE SPEAKERS TBC") {
          continue;
        }

        var id = "-" + speaker.toLowerCase().replace(".", "").split(" ").join("-");

        if(count % 3 == 0) {
            $row_div = $("<div />").addClass("row");
        }
        count++;

        $row_div.append(
            $("<div />").addClass("col-md-4")
            .append(
                $("<div />").addClass("speaker")
                .append(
                    $("<figure />")
                    .append(
                        $("<a />").attr({
                            "data-target": ("#myModal" + id),
                            "data-toggle": "modal"
                        })
                        .append(
                            $("<img />").attr({
                                "src": info[speaker].imagePath,
                                "data-toggle": "tooltip",
                                "title": "Click for more info"
                            })
                        ) // append to a
                    ) // append to figure
                    .append(
                        $("<div />").addClass("col-xs-9 col-xs-push-1")
                        .append(
                            $("<h4 />").text(speaker)
                        ) // heading div
                    ) // append to figure
                    .append(
                        $("<div />").addClass("col-xs-1")
                        .append(
                            $("<a />")
                            .append(
                                $("<i />").addClass(
                                    CATEGORY_TO_ICON[info[speaker].category]
                                ).attr({
                                    "data-toggle": "tooltip",
                                    "title": info[speaker].category
                                })
                            ) // append to a
                        ) // append to list
                    ) // append to figure
                    .append(
                        $("<div />").addClass("col-xs-12")
                        .append(
                            $("<h5 />").text(info[speaker].affiliation)
                        ) // paragraph div
                        .append(
                            $("<p />").text(info[speaker].lectureHeading)
                        ) // paragraph div
                    ) // append to figure
                    .append(
                        $("<div />").addClass("modal fade").attr({
                            "tabindex": "-1",
                            "id": ("myModal" + id),
                            "role": "dialog",
                            "aria-hidden": "true",
                            "aria-labelledby": "myModalLabel"
                        })
                        .append(
                            $("<div />").addClass("modal-dialog")
                            .append(
                                $("<div />").addClass("modal-content")
                                .append(
                                    $("<div />").addClass("modal-header")
                                    .append(
                                        $("<button />").addClass("close").attr({
                                            "aria-hidden": "true",
                                            "type": "button",
                                            "data-dismiss": "modal"
                                        })
                                        .text("x")
                                    ) // append to modal header
                                    .append(
                                        $("<h4 />").attr({
                                            "id": "myModalLabel"
                                        })
                                        .text(speaker)
                                    ) // append to modal header
                                ) // append to modal content
                                .append(
                                    $("<div />").addClass("modal-body")
                                    .append(
                                        $("<h4 />")
                                        .text(info[speaker].lectureHeading || "")
                                    ) // append to modal body
                                    .append(
                                      (
                                        info[speaker].vidLink?
                                        $("<iframe />").attr({
                                            "src": info[speaker].vidLink,
                                            "frameborder": "0",
                                            "allow": "autoplay;encrypted-media",
                                            "allowfullscreen": true
                                        }).css({
                                            "width": "100%",
                                            "height": "300"
                                        })
                                        :""
                                      )
                                    )
                                    .append(
                                        ((info[speaker].lectureAbstract || []).join("<br><br>") || "Self-explanatory :)")
                                    )
                                ) // append to modal content
                                .append(
                                    $("<div />").addClass("modal-footer")
                                    .append(
                                        $("<button />").addClass("btn btn-primary").attr({
                                            "type": "button",
                                            "data-dismiss": "modal"
                                        })
                                        .text("Close")
                                    ) // append to modal footer
                                ) // append to modal content
                            ) // append to modal dialog
                        ) // append to modal div
                    ) // append to figure
                ) // append to speaker div
            ) // append to col div
        );

        if(count % 3 == 2) {
            $("#speakers div.container").append($row_div);
        }

        if(speaker == KEYNOTE) {
          continue;
        }

        // add info to schedule
        $scheduleSection = $(".schedule .tab-content");
        // find title of this speaker and insert information (if not in tab zero)
        $scheduleSlot = $scheduleSection.find("h3.schedule-slot-title:containsi('" + info[speaker].lectureHeading + "')").closest(".schedule-slot-info");

        if($scheduleSlot.length > 0) {
            $slotInfo = $scheduleSlot.find("div.schedule-slot-info-content");

            $slotInfo.wrap($("<div />").addClass("col-xs-8"))
            // $scheduleSlot = $scheduleSlot.filter(function(index, $element) {
            //     return ($element.closest("#tab_zero") == null);
            // });

            $scheduleSlot.prepend(
                $("<div />").addClass("col-xs-4")
                .append(
                    $("<a />")
                    .append(
                        $("<img />").addClass("schedule-slot-speakers").attr({
                            "src": info[speaker].imagePath
                        })
                    )
                )
            );

            $slotInfo.append(
                $("<h4 />").addClass("schedule-slot-speaker-name").text(speaker)
            );
        } else if(info[speaker].category && info[speaker].category.toLowerCase() == "lightning talk") {
            $scheduleSlot = $scheduleSection.find("div.row.lightning-speakers");
            $slot = $("<div />").addClass("col-xs-3").css({
                  "height": "7.5em"
                })
                .append(
                    $("<div />").addClass("text-center")
                    .append(
                        $("<img />").addClass("schedule-slot-speakers").attr({
                            "src": info[speaker].imagePath
                        }).css({
                            "position": "absolute",
                            "right": "50%",
                            "transform": "translateX(+50%)"
                        })
                    )
                )
                .append(
                    $("<div />").addClass("text-center")
                    .append(
                        $("<h4 />").addClass("schedule-slot-speaker-name").text(speaker).css({
                            "position": "absolute",
                            "top": "70%",
                            "transform": "translateY(-100%)",
                            "right": "50%",
                            "transform": "translateX(+50%)",
                            "width": "100%"
                        })
                        // $("<h3 />").text(info[speaker].lectureHeading)
                    )
                );
            $scheduleSlot.append($slot);
            $scheduleSlot = $slot;
        }

        // console.log($scheduleSlot);
        $scheduleSlot.attr({
            "data-target": ("#myModal" + id),
            "data-toggle": "modal"
        });

        $scheduleSlot.mouseenter(function() {
            $(this).css({
                "cursor": "pointer",
                "-webkit-transform": "scale(1.2)",
                    "-ms-transform": "scale(1.2)",
                        "transform": "scale(1.2)",
                "-webkit-transition": "all 0.3s",
                "-moz-transition": "all 0.3s",
                "-o-transition": "all 0.3s",
                "transition": "all 0.3s"
            })
        }).mouseleave(function() {
            $(this).css({
                "cursor": "default",
                "-webkit-transform": "scale(1)",
                    "-ms-transform": "scale(1)",
                        "transform": "scale(1)",
                "-webkit-transition": "all 0.3s",
                "-moz-transition": "all 0.3s",
                "-o-transition": "all 0.3s",
                "transition": "all 0.3s"
            })
        });
    }

    $("#speakers div.container").append($row_div);
}

function populateSponsors(sponsors) {
    var $row_div;
    var count = 0;
    var $logosDiv = $("#sponsors div.container div.logos");

    for(i in sponsors) {
        var sponsor = sponsors[i];

        if(count % 4 == 0) {
            $row_div = $("<div />").addClass("row");
        }

        $row_div.append(
            $("<div />").addClass("col-sm-3")
            .append(
                $("<a />").attr({
                    "href":sponsor[1],
                    "target": "_blank"})
                .addClass("sponsors-box")
                .append(
                    $("<img />").attr({
                        "src": sponsor[0],
                    })
                    // .addClass("sponsor-logo")
                )
            )
        );

        if(count % 4 == 3) {
            $logosDiv.append($row_div);
        }
        count++;
    }

    $logosDiv.append($row_div);

    // console.log($logosDiv.html().toString());
}

// add case insensitive contains
$.extend($.expr[':'], {
  'containsi': function(elem, i, match, array)
  {
    return (elem.textContent || elem.innerText || '').toLowerCase()
    .indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});

function populatePanelSpeakers(panel, info) {
  $scheduleSection = $(".schedule .tab-content");

  for(i in panel) {
    var speaker = panel[i];
    var id = "-" + speaker.toLowerCase().replace(".", "").split(" ").join("-");


    $scheduleSlot = $scheduleSection.find("div.row.panel-speakers");
    $slot = $("<div />").addClass("col-xs-2").css({
      "height": "7.5em"
    })
    .append(
        $("<div />").addClass("text-center")
        .append(
            $("<img />").addClass("schedule-slot-speakers").attr({
                "src": info[speaker].imagePath
            }).css({
                "position": "absolute",
                "right": "50%",
                "transform": "translateX(+50%)"
            })
        )
    )
    .append(
        $("<div />").addClass("text-center")
        .append(
            $("<h4 />").addClass("schedule-slot-speaker-name").text(speaker).css({
                "position": "absolute",
                "top": "70%",
                "transform": "translateY(-100%)",
                "right": "50%",
                "transform": "translateX(+50%)",
                "width": "100%"
            })
        )
    );

    $scheduleSlot.append($slot);
    $scheduleSlot = $slot;

    $scheduleSlot.attr({
        "data-target": ("#myModal" + id),
        "data-toggle": "modal"
    });

    $scheduleSlot.mouseenter(function() {
        $(this).css({
            "cursor": "pointer",
            "-webkit-transform": "scale(1.2)",
                "-ms-transform": "scale(1.2)",
                    "transform": "scale(1.2)",
            "-webkit-transition": "all 0.3s",
            "-moz-transition": "all 0.3s",
            "-o-transition": "all 0.3s",
            "transition": "all 0.3s"
        })
    }).mouseleave(function() {
        $(this).css({
            "cursor": "default",
            "-webkit-transform": "scale(1)",
                "-ms-transform": "scale(1)",
                    "transform": "scale(1)",
            "-webkit-transition": "all 0.3s",
            "-moz-transition": "all 0.3s",
            "-o-transition": "all 0.3s",
            "transition": "all 0.3s"
        })
    });
  }
}

function populateKeyNote(keynote, info) {
    var speaker = keynote;
    var id = "-" + speaker.toLowerCase().replace(".", "").split(" ").join("-");

    var $scheduleSection = $(".schedule .tab-content");
    var $keynoteSlot = $scheduleSection.find("div.keynote");
    var $heading = $keynoteSlot.find("h3.schedule-slot-title:containsi('" + info[speaker].lectureHeading + "')");
    var $headingDiv = $("<div />").addClass("col-xs-9");

    var $newDiv = $heading.wrap($headingDiv);
    $newDiv.append(
        $("<h4 />").addClass("schedule-slot-speaker-name").text(speaker)
    );

    $keynoteSlot.prepend(
        $("<div />").addClass("col-xs-3")
        .append(
            $("<a />")
            .append(
                $("<img />").addClass("schedule-slot-speakers").attr({
                    "src": info[speaker].imagePath
                })
            )
        )
    );

    $keynoteSlot.attr({
        "data-target": ("#myModal" + id),
        "data-toggle": "modal"
    });

    $keynoteSlot.mouseenter(function() {
        $(this).css({
            "cursor": "pointer",
            "-webkit-transform": "scale(1.2)",
                "-ms-transform": "scale(1.2)",
                    "transform": "scale(1.2)",
            "-webkit-transition": "all 0.3s",
            "-moz-transition": "all 0.3s",
            "-o-transition": "all 0.3s",
            "transition": "all 0.3s"
        })
    }).mouseleave(function() {
        $(this).css({
            "cursor": "default",
            "-webkit-transform": "scale(1)",
                "-ms-transform": "scale(1)",
                    "transform": "scale(1)",
            "-webkit-transition": "all 0.3s",
            "-moz-transition": "all 0.3s",
            "-o-transition": "all 0.3s",
            "transition": "all 0.3s"
        })
    });
}

function populateOrganizers(organizers) {
  var $row_div = $("<div />").addClass("row");
  var count = 1;

  for(speaker in organizers) {
    $organizerSection = $(".about .container");

    $slot = $("<div />").addClass("col-xs-4")
    .append(
      $("<div />").addClass("speaker").addClass("organizer")
      .append(
        $("<figure />")
        .append(
          $("<a />").attr({
            "href": organizers[speaker].link,
            "target": "_blank"
          })
          .append(
            $("<img />").attr({
              "src": organizers[speaker].imagePath
            })
            .attr(
              (
                organizers[speaker].link?
                {
                  "data-toggle": "tooltip",
                  "title": "click me!"
                }
                :{}
              )
            )
          ) // append to a
        ) // append to figure
        .append(
          $("<div />").addClass("col-xs-12")
          .append(
              $("<h4 />").text(speaker)
          ) // heading div
        ) // append to figure
      )
    );

    $row_div.append($slot);

    if(count % 3 == 0) {
        $organizerSection.append($row_div);
        $row_div = $("<div />").addClass("row");
    }
    count++;

  }

  $organizerSection.append($row_div);

}

populateSponsors(SPONSORS);
populateSpeakerInfo(INFO);
// populatePanelSpeakers(PANEL, INFO);
// populateKeyNote(KEYNOTE, INFO);
populateOrganizers(ORGANIZERS);
