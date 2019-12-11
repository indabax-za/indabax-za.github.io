CATEGORY_TO_ICON = {
    'Research': "book",
    "Foundations": "hammer",
    "Applied": "bowtie",
    "Keynote": "key"
};

// Format
// 'Speaker Name': { imagePath: './assets/speaker_data/dr._nick_bradshaw/image.jpg',
//         lectureHeading: 'Community development as an Avenue to Career Growth',
//         category: 'Industry/Ethics/Policy',
//         affiliation: 'Cortex Logic / MIIA',
//         abstract: '',
//         bio: "South African based Entrepreneur helping clients understand the value of Artificial Intelligence [AI] powered technologies. 20+ years experience in complex software & digital collaboration tooling sector. Launched Africa's largest business focused AI community [AI Expo Africa] and Africa's first AI & Data Science Magazine [Synapse], helping chart Africa's IR4.0 journey.",
//         vidLink: "https://www.youtube.com/embed/QH4IpE44NYc",
//         slidesLink: "https://drive.google.com/open?id=1pq26AyxWOlUcA8M3p7Z1oOUHTEiO-Z_b"
//     },

INFO = 

{
    'Dr. Benjamin Rosman': {
      imagePath: './assets/speaker_data/dr._benjamin_rosman/image.jpg',
      category: 'Research',
      lectureHeading: 'Reinforcement Learning',
      affiliation: 'University of the Witwatersrand'
    },
    'Marcel Atemkeng': {
      lectureHeading: 'Rhodes Team: AI and astronomy, help with Intro to CNNs\n'
    },
    'Merelda Woohoo': {
      lectureHeading: 'Machine Learning in Production\n'
    },
    'Quentin Williams': {
      imagePath: './assets/speaker_data/quentin_williams/image.jpg',
      lectureHeading: 'Data Science',
      category: 'Applied',
      affiliation: 'Deloitte\n'
    },
    'Ronald Clark': {
      lectureHeading: '3D Vision',
      category: 'Applied',
    },
    'John Kamara': {
      imagePath: './assets/speaker_data/john_kamara/image.jpg',
      category: 'Applied',
      affiliation: 'Global Gaming Africa, NM-AIST Arusha, MIIA, IFERS\n'
    },
}

;

PANEL = {
    'Prof. Tshilidzi Marwala':
     { imagePath: './assets/speaker_data/prof._tshilidzi_marwala/image.jpg'},
     'Dr. Justine Nasejje':
     { imagePath: './assets/speaker_data/dr._justine_nasejje/image.jpg'},
    'Pelonomi Moiloa':
    { imagePath: './assets/speaker_data/pelonomi_moiloa/image.jpg'},
    'Sicelukwanda Zwane':
    { imagePath: './assets/organiser_data/sicelukwanda_zwane/image.jpg'},
    'Dr. Benjamin Rosman':
    { imagePath: './assets/speaker_data/dr._benjamin_rosman/image.jpg'},
    'Jade Abbott':
    { imagePath: './assets/speaker_data/jade_abbott/image.jpg'},
    'Prof. Francesco Petruccione':
    {imagePath: './assets/organiser_data/francesco_petruccione/image.jpg'},
    'Christopher Currin':
    {imagePath: './assets/organiser_data/christopher_currin/image.jpg'},
};

KEYNOTE = "";

ORGANIZERS = {
    'Maria Schuld':
    {
        imagePath: './assets/organiser_data/maria_schuld/image.jpg',
        committee: 'Budget'
    },
    'Anna Bosman':
    {
        imagePath: './assets/organiser_data/anna_bosman/image.jpg',
        linkInfoPath: './assets/organiser_data/anna_bosman/link.txt',
        link: 'https://annabosman.github.io/',
        committee: 'Local organiser'
    },
    'Christopher Currin':
    {
        imagePath: './assets/organiser_data/christopher_currin/image.jpg',
        linkInfoPath: './assets/organiser_data/christopher_currin/link.txt',
        link: 'https://chriscurrin.github.io/',
        committee: 'Sponsors'
    },
    'Avashlin Moodley':
    {
        imagePath: './assets/organiser_data/avashlin_moodley/image.jpg',
        linkInfoPath: './assets/organiser_data/avashlin_moodley/link.txt',
        link: 'https://www.linkedin.com/in/avashlinmoodley/',
        committee: 'Marketing'
    },
    'Chris Cleghorn':
    {
        imagePath: './assets/organiser_data/chris_cleghorn/image.jpg',
        committee: 'Programme'
    },
    'Naomi Molefe':
    {
        imagePath: './assets/organiser_data/naomi_molefe/image.PNG',
        committee: 'Hackathon'
    },
    'Vongani Maluleke':
    {
        imagePath: './assets/organiser_data/Vongani_Maluleke/image.jpg',
        linkInfoPath: './assets/organiser_data/Vongani_Maluleke/link.txt',
        link: 'https://linkedin.com/in/vongani-hlavutelo-maluleke-3a848787',
        committee: 'Programme'
    },
    'Vukosi Marivate':
    {
        imagePath: './assets/organiser_data/Vukosi_Marivate/image.jpg',
        linkInfoPath: './assets/organiser_data/Vukosi_Marivate/link.txt',
        link: 'http://vima.co.za/',
        committee: 'Local Host'
    },
    'Windy Mokuwe':
    {
        imagePath: './assets/organiser_data/Windy_Mokuwe/image.jpg',
        committee: 'Social events'
    },
    'Raesetje Sefala':
    {
        imagePath: './assets/organiser_data/raesetje_sefala/image.jpg',
        linkInfoPath: './assets/organiser_data/raesetje_sefala/link.txt',
        link: 'https://sefalab.github.io/',
        committee: 'Marketing'
    }
};

SPONSORS = [
    [ './assets/images/sponsors/nrf_ac_za.png',
        'http://www.nrf.ac.za', 'National Research Foundation' ],
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
    //keynotes = shuffle(['Prof. Bruce Bassett', 'Prof. Tshilidzi Marwala', 'Dr. Andrew Saxe']);
    speakers = shuffle(Object.keys(info));

    /* speakers = speakers.filter(function(item) {
        return keynotes.indexOf(item) < 0
    });
    for(keynote of keynotes){
        speakers.unshift(keynote);
    } */

    for(speaker of speakers) {
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
                            $("<img />").attr(info[speaker].bio||info[speaker].abstract?
                                {
                                  "src": info[speaker].imagePath,
                                  "data-toggle": "tooltip",
                                  "title": "speaker bio"
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
                                $("<ion-icon />").attr({
                                    "name": CATEGORY_TO_ICON[info[speaker].category],
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
                        info[speaker].bio||info[speaker].abstract||info[speaker].vidLink||info[speaker].slidesLink?(
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
                                        $("<h3 />").attr({
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
                                        $("<h3 />")
                                        .text(info[speaker].lectureHeading || "")
                                    )
                                    .append(
                                      (
                                        info[speaker].vidLink?
                                        $("<iframe />").attr({
                                            "src": info[speaker].vidLink,
                                            "frameborder": "0",
                                            "allow": "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                                            "allowfullscreen": true,
                                            "width": "100%",
                                            "height": "300"
                                        })
                                        :""
                                      )
                                    )
                                    .append(
                                        $("<a />").attr({"href": info[speaker].slidesLink})
                                        .text(info[speaker].slidesLink?"Click Here for the Slides":"")
                                    )
                                    .append(
                                        $("<h4 />").text(info[speaker].abstract?"Talk Abstract":"")
                                    )
                                    .append(
                                        info[speaker].abstract
                                    )
                                    .append(
                                        $("<h4 />").text(info[speaker].bio?"Short Bio":"")
                                    )
                                    .append(
                                        info[speaker].bio
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
            $("#speakers div.container.speakers").append($row_div);
        }

		//##########################################################################


        if(speaker == KEYNOTE) {
          continue;
        }

        // add info to schedule
        $scheduleSection = $(".schedule .accordion_panel");
        // find title of this speaker and insert information (if not in tab zero)
        $scheduleSlot = $scheduleSection.find("p.schedule-slot-desc:containsi('" + info[speaker].lectureHeading + "')").closest(".schedule-slot-info");

		/**
		var str = 'It iS a 5r&e@@t Day.'
		var array = str.split(": ");
		print(array);
		console.log($scheduleSlot)
		**/
        if($scheduleSlot.length > 0) {
            $slotInfo = $scheduleSlot.find("div.schedule-slot-info-content");
			$slotInfoName = $scheduleSlot.find("p.schedule-slot-desc");

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

            $slotInfoName.append(
                $("<h4 />").addClass("schedule-slot-speaker-name").text(speaker)
            );

		}




		//##########################################################################






    }

    $("#speakers div.container.speakers").append($row_div);
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

     console.log($logosDiv.html().toString());
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
    $organizerSection = $(".team .container");

    $slot = $("<div />").addClass("col-md-3 col-xs-6")
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
            .attr({
              "data-toggle": "tooltip",
              "title": organizers[speaker].committee
            })
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

    if(count % 4 == 0) {
        $organizerSection.append($row_div);
        $row_div = $("<div />").addClass("row");
    }
    count++;

  }

  $organizerSection.append($row_div);

}

// javascript for accordion buttons
var acc = document.getElementsByClassName("accordion_button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("ac_active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/*
var acc = document.getElementsByClassName("accordion_button");
var panel = document.getElementsByClassName('accordion_panel');

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        var setClasses = !this.classList.contains('ac_active');
        setClass(acc, 'ac_active', 'remove');
        setClass(panel, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle("ac_active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

*/
function populatePanel(panellists) {
    var $row_div = $("<div />").addClass("row");
    var count = 1;

    for(panellist of shuffle(Object.keys(panellists))) {
      $organizerSection = $(".panel.container");

      $slot = $("<div />").addClass("col-md-3 col-xs-6")
      .append(
        $("<div />").addClass("speaker").addClass("panellist")
        .append(
          $("<figure />")
          .append(
            $("<a />").attr({
              "href": panellists[panellist].link,
              "target": "_blank"
            })
            .append(
              $("<img />").attr({
                "src": panellists[panellist].imagePath
              })
              .attr(
                (
                    panellists[panellist].link?
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
                $("<h4 />").text(panellist)
            ) // heading div
          ) // append to figure
        )
      );

      $row_div.append($slot);
      if(count % 4 == 0) {
        $organizerSection.append($row_div);
        $row_div = $("<div />").addClass("row");
      }
      count++;

    }

    $organizerSection.append($row_div);

  }

//populateSponsors(SPONSORS);
populateSpeakerInfo(INFO);
//populatePanel(PANEL);
populateOrganizers(ORGANIZERS);

