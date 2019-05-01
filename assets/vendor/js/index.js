// Issue with map staying loaded due to billing not enabled in google cloud so added in embedded static map instead

/*function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("map"),mapProp);
}*/

$(document).ready(function() {
  console.log('DevEire FE Ready');
});

// Form submit functionality
function submitForm() {
  document.getElementById("contact-form").submit();
}

function validateForm() {
  // Validate form to check if everything that is needed is filled in
  var x = document.forms["contact-form"]["name"].value;
  var y = document.forms["contact-form"]["email"].value;
  var w = document.forms["contact-form"]["subject"].value;
  var z = document.forms["contact-form"]["msg"].value;
  var number = document.forms["contact-form"]["user-Number"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  if (y == "") {
    alert("Email must be filled out");
    return false;
  }
  if (w == "") {
    alert("Subject must be filled out");
    return false;
  }
  if (z == "") {
    alert("Message must be filled out");
    return false;
  }

  if (isNaN(number))
  {
    alert("Must be a phone number");
    return false;
  }

  return true;
}
