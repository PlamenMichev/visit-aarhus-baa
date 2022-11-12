import { VISIT_AARHUS_API_ULR } from '../utils/config';

const getAllPlaces = async () => {
  const response = await fetch(VISIT_AARHUS_API_ULR);
  const data = await response.json();
  const result = data.map((place) => ({
    id: place.Id,
    createdAt: place.Created,
    name: place.Name,
    category: place.Category.Name,
    address:
      place.Address.AddressLine1 + ', ' + place.Address.PostalCode + ', ' + place.Address.City,
    geolocation: [place.Address.GeoCoordinate?.Latitude, place.Address.GeoCoordinate?.Longitude],
    contactInfo: [
      place.ContactInformation?.Phone,
      place.ContactInformation?.Email,
      place.ContactInformation?.Link?.Url
    ],
    description:
      place.Descriptions.filter((description) => description.DescriptionType === 'INTROTEKST')
        .length > 0
        ? place.Descriptions.filter(
            (description) => description.DescriptionType === 'INTROTEKST'
          )[0].Text
        : place.Descriptions.length > 0
        ? place.Descriptions[0].Text
        : 'No description',
    pictures: place.Files.length >= 1 ? place.Files[0]?.Uri : ''
  }));
  console.log('1', result);
  return result;
};

export { getAllPlaces };
