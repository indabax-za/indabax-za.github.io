import GSheetProcessor from './Sheets_package/GoogleAPV4/gsheetsprocessor.js';



function cvtTabledataToDictionary(table_data,key_name)
{ 
  var dictionary_version={};
  for (let i = 0; i < table_data.length; i++) {
    var row=table_data[i]
    var key=row[key_name]
    delete row[key_name]
    dictionary_version[key]=row;
  }
  return dictionary_version;
}
/*
In order to use a new sheet in the google drive.
1: Under "File" select "Publish to the web"
2: Make sure you check "automatically republish when changes are made"
3: The sheetid is the one from the sheet url not the publish link you are given if steps 1-2
4: The cvtTabledataToDictionary is their to convert the table data to conform to the 
*/
const apiKey="AIzaSyDZeJjyt8JzGI91VJm8bSMyiyyFbQrdDmQ";

GSheetProcessor(
{
  apiKey: apiKey,
  sheetId: '1J9F4Ojckm9Wm10GVjdjEFFkZL-49Yzxo2S7S-AfP5Eo',
  sheetNumber: 1,
  returnAllResults: true
},
results=>{
  let hostSheet_data =cvtTabledataToDictionary(results,"GroupName");
  populateHosts(hostSheet_data);
},
error => {console.log('Retrying sheet access', error); }
);




GSheetProcessor(
  {
    apiKey: apiKey,
    sheetId: '1cb2mUDwpOJCu2hwmGt__Ka7u8bDrh6K2eOc2blI248s',
    sheetNumber: 1,
    returnAllResults: true
  },
  results=>{
    let organizersSheet_data =cvtTabledataToDictionary(results,"Name");
    populateOrganizers(organizersSheet_data);
  },
  error => {console.log('Retrying sheet access', error); }
);


GSheetProcessor(
  {
    apiKey: apiKey,
    sheetId: '1J9F4Ojckm9Wm10GVjdjEFFkZL-49Yzxo2S7S-AfP5Eo',
    sheetNumber: 2,
    returnAllResults: true
  },
  results=>{
    let eventSheet_data =cvtTabledataToDictionary(results,"GroupName");
    populateEvents(eventSheet_data);
    populateEvents(eventSheet_data,"Inactive");
    return results;
  },
  error => {console.log('Retrying sheet access', error); }
);




let  CATEGORY_TO_ICON = {
    'Research': "book",
    "Foundations": "hammer",
    "Applied": "bowtie",
    "Keynote": "key"
};

let  PANEL = {};

let  KEYNOTE = "";

/////var ORGANIZERS = organizersSheet_data;

//var HOSTS = hostSheet_data;

/////var EVENTS =  eventSheet_data;

let  SPONSORS = [
    [ './assets/images/sponsors/nrf_ac_za.png',
        'http://www.nrf.ac.za', 'National Research Foundation' ],
];


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

    for(var speaker of speakers) {
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

    }

    $("#speakers div.container.speakers").append($row_div);
}

function populateSponsors(sponsors) {
    var $row_div;
    var count = 0;
    var $logosDiv = $("#sponsors div.container div.logos");

    for(var i in sponsors) {
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

  for(var i in panel) {
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

function populateEvents(events, event_state="Active"){
  // if(Object.keys(events).length==0) 
  //   return;
  var CSS_Class=( event_state=="Active"?".events":".p_events");
  var $eventSection = $(CSS_Class+" .container");

  var loader = $(CSS_Class+" .container .loader");
  loader.hide();
  
  var count = 0;
  for(var event_key of Object.keys(events)){
    if(events[event_key].State!= event_state)
      continue;
    var $row_div = $("<div />").addClass("row").addClass("event-row")

    if(events[event_key].EventTitle == undefined){
      continue;
    }
    
    var $slot = $("<div />").addClass("col-md-2 col-xs-3")
    .append(
        $("<figure />")
          .append(
            $("<div />")
            .addClass("col-xs-12").attr({
              "vertical-align": "middle"
            })
          ) // append to figure
        .append(
          $("<a />").attr({
            "href": events[event_key].link,
            "target": "_blank",
          })
          .append(
            $("<img />").attr({
              "src": events[event_key].imagePath,
              "width": "80%",
            })
          )
        )
    );


    
    var $slot2 =  $("<div />").addClass("col-md-9 col-xs-7").addClass("box2").addClass("sb6")
      .append(
        $("<div />")
        .append(
          $("<h4 />").attr({
            "text-align": "center"
          }).text(events[event_key].EventTitle)
        )
        .append(
          $("<p />").attr({
            "text-align": "left",
            "margin-bottom": 0
          }).text("Date: "+ events[event_key].Date).append("<br/>")
          .append("Time: "+ events[event_key].Time).append("<br/>")
          .append('Event Link: <a href="'+events[event_key].EventLink+
            '" target="_blank" rel="external">'
            + "Click Here!").append("</a><br/>")
        )
        
    );
    
    $row_div.append($slot);
    $row_div.append($slot2);
    $eventSection.append($row_div);
    $row_div = $("<div />").addClass("row");
    count++;
    //console.log(count)
  }


}
function populateHosts(hosts) {
  if(Object.keys(hosts).length==0) 
    return;

  var $row_div = $("<div />").addClass("row");
  var count = 1;

  var $hostSection = $(".hosts .container");
  var loader = $(".hosts .container .loader");
  loader.hide();

  for(var host_key of Object.keys(hosts)) {

    var $slot = $("<div />").addClass("col-md-3 col-xs-6")
    .append(
      $("<div />").addClass("host")
      .append(
        $("<figure />")
          .append(
            $("<div />")
            .addClass("col-xs-12")
            .append(
                $("<h4 />").text(host_key)
            ) // heading div
          ) // append to figure
        .append(
          $("<a />").attr({
            "href": hosts[host_key].link,
            "target": "_blank"
          })
          .append(
            $("<img />").attr({
              "src": hosts[host_key].imagePath,
              "width": "80%",
              "top": "50%"
            })
            .attr({
              "data-toggle": "tooltip",
              "title": hosts[host_key].link  //.GroupName
            })
          ) // append to a
        ) // append to figure
        
      )
    );

    $row_div.append($slot);

    if(count % 4 == 0) {
        $hostSection.append($row_div);
        $row_div = $("<div />").addClass("row");
    }
    count++;

  }

  $hostSection.append($row_div);

}

// Populate speakers in upcoming roadshow elements
function populateHostSpeakers(hostSpeakers) {
  for (var speaker of hostSpeakers){

    if(speaker == KEYNOTE) {
      continue;
    }

    // add info to schedule
    // TODO: Find appropriate sections by id
    $scheduleSection = $(".schedule .accordion_panel");
    // find title of this speaker and insert information (if not in tab zero)
    $scheduleSlot = $scheduleSection.find("p.schedule-slot-desc:containsi('" + info[speaker].lectureHeading + "')").closest(".schedule-slot-info");

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


  }
}
function populateOrganizers(organizers) {
  var $row_div = $("<div />").addClass("row");
  var count = 1;
  for(var speaker of shuffle(Object.keys(organizers))) {
    var $organizerSection = $(".team .container");

    var $slot = $("<div />").addClass("col-md-3 col-xs-6")
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


function populatePanel(panellists) {
    var $row_div = $("<div />").addClass("row");
    var count = 1;

    for(panellist of shuffle(Object.keys(panellists))) {
      var $organizerSection = $(".panel.container");

      var $slot = $("<div />").addClass("col-md-3 col-xs-6")
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
//populateSpeakerInfo(INFO);
//populatePanel(PANEL);

//populateHosts(HOSTS);
//populateOrganizers(ORGANIZERS);

//populateEvents(EVENTS,HOSTS);
