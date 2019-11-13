function get_info(city, zip, lon, lat, search_dist, gender, language) {
  user_lon = lon;
  user_lat = lat;
  dist = search_dist;
  valid_obj = [];
  doc_url = "";

  if (lon != "" && lat != "") {
    doc_url =
      "https://api.betterdoctor.com/2016-03-01/doctors?location=" +
      user_lat +
      "%2C" +
      user_lon +
      "%2C" +
      dist +
      "&user_location=" +
      user_lat +
      "%2C" +
      user_lon +
      "&sort=distance-asc&skip=0&limit=75&user_key=e7b023a985a4c3239e30aeae1e42bee2";
  }

  //Check for city and zip url here
  console.log(doc_url);

  fetch(doc_url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      // Work with JSON data here
      data.data.forEach(doctor => {
        info = get_doc_info(doctor);
        flag = true;

        if (info.gender != "No Preference") {
          if (info.gender != gender) {
            flag = false;
          }
        }

        if (info.degree == "DDS" || info.degree == "DMD") {
          flag = false;
        }

        //Check language here

        if (flag == true) {
          valid_obj.push(info);
        }
      });
      console.log(valid_obj);
    })
    .catch(err => {
      console.log(err);
    });
}

function get_doc_info(doctor) {
  info_dict = {
    first: "",
    last: "",
    degree: "",
    address: "",
    city: "",
    zipcode: "",
    phone: "",
    gender: "",
    languages: []
  };

  info_dict.first = doctor.profile.first_name;
  info_dict.last = doctor.profile.last_name;
  info_dict.degree = doctor.profile.title;
  info_dict.address = doctor.practices[0].visit_address.street;
  info_dict.city = doctor.practices[0].visit_address.city;
  info_dict.zipcode = doctor.practices[0].visit_address.zip;
  info_dict.phone = doctor.practices[0].phones[0].number;
  info_dict.gender = doctor.profile.gender;
  info_dict.language = doctor.profile.languages;

  return info_dict;
}

//Irvine coordinates: "-117.826", "33.684"
get_info("irvine", "92612", "-117.826", "33.684", "50", "female", "English");
