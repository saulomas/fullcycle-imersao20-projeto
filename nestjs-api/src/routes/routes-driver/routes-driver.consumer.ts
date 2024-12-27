import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { KafkaContext } from 'src/kafka/kafka-context';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Controller()
export class RoutesDriverConsumer {
  private logger = new Logger(RoutesDriverConsumer.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  @MessagePattern('simulation')
  async driverMoved(payload: KafkaContext) {
    this.logger.log(
      `Receiving message from topic ${payload.topic}`,
      payload.messageValue,
    );

    const { route_id, lat, lng } = payload.messageValue;

    await this.httpService.axiosRef.post(
      `${this.configService.get('NEST_API_URL')}/routes/${route_id}/process-route`,
      {
        lat,
        lng,
      },
    );
  }

  //http
  //pub/sub - redis
  //grpc
  //route_id, lat, lng
}
