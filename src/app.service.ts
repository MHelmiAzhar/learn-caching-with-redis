import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
@Injectable()
export class AppService {
  private readonly RedisClient: Redis;
  constructor() {
    this.RedisClient = new Redis({
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      username: 'default', // needs Redis >= 6
      password: 'my-top-secret',
      db: 0, // Defaults to 0
    });
  }

  async getHello() {
    return await this.RedisClient.get('test');
  }

  async saveDataRedis(name: string) {
    return await this.RedisClient.set('test', name);
  }
}
