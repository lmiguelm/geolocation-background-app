import Geolocation from '@react-native-community/geolocation';

export function getPosition(cargaId) {
  Geolocation.getCurrentPosition(
    position => onSuccess(position, cargaId),
    onError,
    options,
  );
}

const options = {
  timeout: 50000,
  maximumAge: 0,
  enableHighAccuracy: true,
};

function onSuccess(position, cargaId) {
  const {coords} = position;

  console.log({
    latitude: coords.latitude,
    longitude: coords.longitude,
    cargaId,
  });

  // teste chamando api
  fetch('https://api.github.com/users/lmiguelm')
    .then(response => response.json())
    .then(data => console.log(data.company));
}

function onError(error) {
  console.log(error);
}
