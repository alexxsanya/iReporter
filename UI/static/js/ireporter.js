//function filtering the table based on the column specified by the third parameter
function filterTable(tableID,inputField,column_to_search) {
    // Declaring variables 
    var input, filter, table, tr, td, i;
    input = document.getElementById(inputField);
    filter = input.value.toUpperCase();
    table = document.getElementById(tableID);
    tr = table.getElementsByTagName("tr");
    console.log(column_to_search)
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      //td = tr[i].getElementsByTagName("td")[0];
      td = tr[i].getElementsByTagName("td")[column_to_search];

      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }

//function to pick geo coordinates
function pickCoordinates() {
  var output = document.getElementById("geoCode");

  if (!navigator.geolocation){
    output.value = "Geolocation is not supported by your browser";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    output.value = latitude + ',' + longitude;
  }

  function error() {
    output.value = "Unable to retrieve your location";
  }

  output.value = "Decoding…";

  navigator.geolocation.getCurrentPosition(success, error);
  
}