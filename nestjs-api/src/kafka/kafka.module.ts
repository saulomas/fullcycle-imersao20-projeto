import { Inject, Module, OnModuleInit } from '@nestjs/common';
import * as kafkaLibr from '@confluentinc/kafka-javascript';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: (configService: ConfigService) => {
        return new kafkaLibr.KafkaJS.Kafka({
          'bootstrap.servers': configService.get('KAFKA_BROKER'),
        }).producer();
      },
      inject: [ConfigService],
    },
  ],
  exports: ['KAFKA_PRODUCER'],
})
export class KafkaModule implements OnModuleInit {
  constructor(
    @Inject('KAFKA_PRODUCER')
    private readonly kafkaProducer: kafkaLibr.KafkaJS.Producer,
  ) {}

  async onModuleInit() {
    await this.kafkaProducer.connect();
  }
}
