CATEGORY_TO_ICON = {
    'Research': "ion-ios-book",
    "Foundations": "ion-hammer",
    "Industry/Ethics/Policy": "ion-bowtie"
};

INFO = {
    'Dr. Ashley Gritzman':
    { imagePath: './assets/speaker_data/dr._ashley_gritzman/image.jpg',
        lectureHeading: 'Will Capsule Networks Replace CNNs?',
        category: 'Research',
        affiliation: 'IBM',
        bio: 'Ashley is a research scientist at IBM Research in South Africa, where his primary research interest is deep learning for computer vision. He obtained undergrad degrees in electrical and biomedical engineering, and completed his PhD at Wits University, which focused on image processing algorithms for automatic lip-reading.'
    },
    'Dr. Justine Nasejje':
    { imagePath: './assets/speaker_data/dr._justine_nasejje/image.jpg',
        lectureHeading: 'Using conditional inference forests to model time to event data',
        category: 'Research',
        affiliation: 'University of the Witwatersrand',
        bio: ''
    },
    'Dr. Nick Bradshaw':
    { imagePath: './assets/speaker_data/dr._nick_bradshaw/image.jpg',
        lectureHeading: 'Community development as an avenue to career growth',
        category: 'Industry/Ethics/Policy',
        affiliation: 'Cortex Logix / MIIA',
        bio: "South African based Entrepreneur helping clients understand the value of Artificial Intelligence [AI] powered technologies. 20+ years experience in complex software & digital collaboration tooling sector. Launched Africa's largest business focused AI community [AI Expo Africa] and Africa's first AI & Data Science Magazine [Synapse], helping chart Africa's IR4.0 journey."
    },
    'Dr. Benjamin Rosman':
    { imagePath: './assets/speaker_data/dr._benjamin_rosman/image.jpg',
        lectureHeading: 'Exploiting Structure for Accelerating Reinforcement Learning',
        category: 'Research',
        affiliation: 'University of the Witwatersrand / CSIR',
        bio: ''
    },
    'Dr. Terence van Zyl':
    { imagePath: './assets/speaker_data/dr._terence_van_zyl/image.jpg',
        lectureHeading: 'Random Neural Networks',
        category: 'Research',
        affiliation: 'University of the Witwatersrand',
        bio: ''
    }
};

PANEL = [

];

KEYNOTE = "";

ORGANIZERS = {
    'Maria Schuld':
    {
        imagePath: './assets/organiser_data/maria_schuld/image.jpg'
    },
    'Steve James':
    {
        imagePath: './assets/organiser_data/steve_james/image.jpg',
        linkInfoPath: './assets/organiser_data/steve_james/link.txt',
        link: 'https://sdjames.me/'
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
        imagePath: './assets/organiser_data/sicelukwanda_zwane/image.jpg',
        linkInfoPath: './assets/organiser_data/sicelukwanda_zwane/link.txt',
        link: 'https://www.linkedin.com/in/sicelukwanda-zwane-54873398'
    },
    'Amira Abbas':
    {
        imagePath: './assets/organiser_data/amira_abbas/image.jpg',
        linkInfoPath: './assets/organiser_data/amira_abbas/link.txt',
        link: 'https://www.linkedin.com/in/amira-abbas/'
    },
    'Sasha Naidoo':
    {
        imagePath: './assets/organiser_data/sasha_naidoo/image.jpg'
    },
    'Alex Conway':
    {
        imagePath: './assets/organiser_data/alex_conway/image.jpg',
        linkInfoPath: './assets/organiser_data/alex_conway/link.txt',
        link: 'https://www.linkedin.com/in/alex-conway-042666105/'
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
        'http://www.deeplearningindaba.com', 'Deep Learning Indaba'],
    [ './assets/images/sponsors/ukzn_ac_za.png',
        'http://www.ukzn.ac.za', 'University of Kwazulu-Natal' ],
    [ './assets/images/sponsors/nrf_ac_za.png',
        'http://www.nrf.ac.za', 'National Research Foundation' ],
    [ './assets/images/sponsors/wits_ac_za_coe-mass.png',
        'http://www.wits.ac.za/coe-mass', 'CoE-MaSS' ],
    [ './assets/images/sponsors/stanlib_com.png',
    'http://www.stanlib.com', 'STANLIB' ]
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
    for(speaker of shuffle(Object.keys(info))) {
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
                            $("<img />").attr(info[speaker].bio?
                                {
                                  "src": info[speaker].imagePath,
                                  "data-toggle": "tooltip",
                                  "title": "click me!"
                                }
                                :{"src": info[speaker].imagePath})
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
                        info[speaker].bio?(
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
                                        .text(info[speaker].speaker || "")
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
                                        (info[speaker].bio  || "Self-explanatory :)")
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
                        ):("")
                    ) // append to figure
                ) // append to speaker div
            ) // append to col div
        );

        if(count % 3 == 2) {
            $("#speakers div.container").append($row_div);
        }


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
                    .append(
                        $("<h4 />")
                        .text(sponsor[2])
                    )
            )
            .append(
                $("<a />").attr({
                    "href":sponsor[1],
                    "target": "_blank"})
                .append(
                    $("<img />").attr({
                        "src": sponsor[0],
                        "width": "80%",
                        "top": "50%"
                    })
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

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function populateOrganizers(organizers) {
  var $row_div = $("<div />").addClass("row");
  var count = 1;

  for(speaker of shuffle(Object.keys(organizers))) {
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
          $("<div />")
          .addClass("col-xs-12")
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

// populateSponsors(SPONSORS);
populateSpeakerInfo(INFO);
// populatePanelSpeakers(PANEL, INFO);
// populateKeyNote(KEYNOTE, INFO);
populateOrganizers(ORGANIZERS);
