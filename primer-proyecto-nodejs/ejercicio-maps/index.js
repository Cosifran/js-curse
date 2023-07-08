let marker, map;

function initMap() {
    // console.log("Inicializando mapa")
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }

    const posicion2 = {
      lat: 11.004695979994754,
      lng: -74.8052165689702
  }

  const posicion3 = {
    lat: 52.91583414923662,
    lng: 18.616401631184274
  }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: posicion
    })

    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Australia"
    });

    marker2 = new google.maps.Marker({
      position:posicion2,
      map,
      title: "Barranquilla"
    })

    marker3 = new google.maps.Marker({
      position:posicion3,
      map,
      title: "Polonia"
    })
}



