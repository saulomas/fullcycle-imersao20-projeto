import { Injectable } from '@nestjs/common';
import {
  DirectionsRequest,
  Client as GoogleMapsClient,
  TravelMode,
} from '@googlemaps/google-maps-services-js';
import { ConfigService } from '@nestjs/config';
import { request } from 'http';

@Injectable()
export class DirectionsService {
  constructor(
    private readonly googleMapsClient: GoogleMapsClient,
    private readonly configService: ConfigService,
  ) {}

  async getDirections(originId: string, destinationId: string) {
    const requestParames: DirectionsRequest['params'] = {
      origin: `place_id:${originId}`,
      destination: `place_id:${destinationId}`,
      mode: TravelMode.driving,
      key: this.configService.get('GOOGLE_MAPS_API_KEY'),
    };

    const { data } = await this.googleMapsClient.directions({
      params: requestParames,
    });

    return {
      ...data,
      request: {
        origin: {
          place_id: requestParames.origin,
          location: {
            lat: data.routes[0].legs[0].start_location.lat,
            lng: data.routes[0].legs[0].start_location.lng,
          },
        },
        destination: {
          place_id: requestParames.destination,
          location: {
            lat: data.routes[0].legs[0].end_location.lat,
            lng: data.routes[0].legs[0].end_location.lng,
          },
        },
        mode: TravelMode.driving,
      },
    };
  }
}
