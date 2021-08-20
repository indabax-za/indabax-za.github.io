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
let hostSheet_data= await GSheetProcessor(
{
  apiKey: apiKey,
  sheetId: '1J9F4Ojckm9Wm10GVjdjEFFkZL-49Yzxo2S7S-AfP5Eo',
  sheetNumber: 1,
  returnAllResults: true
},
results=>{
  return results;
},
error => {console.log('Retrying sheet access', error); }
);
hostSheet_data=cvtTabledataToDictionary(hostSheet_data,"GroupName");


let eventSheet_data= await GSheetProcessor(
  {
    apiKey: apiKey,
    sheetId: '1J9F4Ojckm9Wm10GVjdjEFFkZL-49Yzxo2S7S-AfP5Eo',
    sheetNumber: 2,
    returnAllResults: true
  },
  results=>{
    return results;
  },
  error => {console.log('Retrying sheet access', error); }
);
eventSheet_data=cvtTabledataToDictionary(eventSheet_data,"GroupName");
//console.log( eventSheet_data);


let organizersSheet_data= await GSheetProcessor(
  {
    apiKey: apiKey,
    sheetId: '1cb2mUDwpOJCu2hwmGt__Ka7u8bDrh6K2eOc2blI248s',
    sheetNumber: 1,
    returnAllResults: true
  },
  results=>{return results;},
  error => {console.log('Retrying sheet access', error); }
);
organizersSheet_data=cvtTabledataToDictionary(organizersSheet_data,"Name");


let  CATEGORY_TO_ICON = {
    'Research': "book",
    "Foundations": "hammer",
    "Applied": "bowtie",
    "Keynote": "key"
};

let  PANEL = {};

let  KEYNOTE = "";

var ORGANIZERS = organizersSheet_data;

var HOSTS = hostSheet_data;

var EVENTS =  eventSheet_data;

let  SPONSORS = [
    [ './assets/images/sponsors/nrf_ac_za.png',
        'http://www.nrf.ac.za', 'National Research Foundation' ],
];
/*
 * Change Navbar color while scrolling
 */

$(window).scroll(function(){
    handleTopNavAnimation();
});

$(window).on('load',function(){
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
