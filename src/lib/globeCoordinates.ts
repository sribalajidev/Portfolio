export interface GlobeCoordinate {
  lat: number;
  lng: number;
}

export const globeCoordinates: Record<string, GlobeCoordinate> = {
  India: {
    lat: 20.5937,
    lng: 78.9629,
  },

  USA: {
    lat: 37.7749,
    lng: -122.4194,
  },

  UK: {
    lat: 51.5072,
    lng: -0.1276,
  },

  UAE: {
    lat: 23.4241,
    lng: 53.8478,
  },

  Australia: {
    lat: -25.2744,
    lng: 133.7751,
  },
};