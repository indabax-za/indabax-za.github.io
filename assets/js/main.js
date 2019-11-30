CATEGORY_TO_ICON = {
    'Research': "ion-ios-book",
    "Foundations": "ion-hammer",
    "Industry/Ethics/Policy": "ion-bowtie",
    "Keynote": "ion-key"
};

INFO = 

{
    'Dr. Benjamin Rosman': {
      imagePath: './assets/speaker_data/dr._benjamin_rosman/image.jpg',
      categoryInfoPath: './assets/speaker_data/dr._benjamin_rosman/category.txt',
      category: 'Reinforcement Learning\n',
      affiliationInfoPath: './assets/speaker_data/dr._benjamin_rosman/affiliation.txt',
      affiliation: 'University of the Witwatersrand\n'
    },
    'Marcel Atemkeng': {
      categoryInfoPath: './assets/speaker_data/marcel_atemkeng/category.txt',
      category: 'Rhodes Team: AI and astronomy, help with Intro to CNNs\n'
    },
    'Merelda Woohoo': {
      categoryInfoPath: './assets/speaker_data/merelda_woohoo/category.txt',
      category: 'Machine Learning in Production\n'
    },
    'Quentin Williams': {
      imagePath: './assets/speaker_data/quentin_williams/image.jpg',
      categoryInfoPath: './assets/speaker_data/quentin_williams/category.txt',
      category: 'Data Science\n',
      affiliationInfoPath: './assets/speaker_data/quentin_williams/affiliation.txt',
      affiliation: 'Deloitte\n'
    },
    'Ronald Clark': {
      categoryInfoPath: './assets/speaker_data/ronald_clark/category.txt',
      category: '3D Vision\n'
    }
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
    },
    'Annika Brundyn':
    {
        imagePath: './assets/organiser_data/annika_brundyn/image.jpg',
        linkInfoPath: './assets/organiser_data/annika_brundyn/link.txt',
        link: 'https://www.linkedin.com/in/annika-brundyn-930898103/'
    },
    'Andrew Paskaramoorthy':
    {
        imagePath: './assets/organiser_data/andrew_paskaramoorthy/image.jpg'
    },
    'Francesco Petruccione':
    {
        imagePath: './assets/organiser_data/francesco_petruccione/image.jpg'
    },
    'Anban Pillay':
    {
        imagePath: './assets/organiser_data/anban_pillay/image.jpg'
    },
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
    'https://knowledgecentre.stanlib.com/', 'STANLIB' ]
    [ './assets/images/sponsors/alis_fund.png',
    'https://alis.fund/', 'alis_' ]
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
    keynotes = shuffle(['Prof. Bruce Bassett', 'Prof. Tshilidzi Marwala', 'Dr. Andrew Saxe']);
    speakers = shuffle(Object.keys(info));

    speakers = speakers.filter(function(item) {
        return keynotes.indexOf(item) < 0
    });
    for(keynote of keynotes){
        speakers.unshift(keynote);
    }

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
    $organizerSection = $(".about .container");

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


// populateSponsors(SPONSORS);
populateSpeakerInfo(INFO);
populatePanel(PANEL);
populateOrganizers(ORGANIZERS);

