import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import {
  airpods,
  boxes,
  dyson,
  fifteen,
  five,
  iphone,
  onefive,
  rub250k,
  rub500k,
  ten,
  two,
} from './arrays';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello(@Param('id') id: string): string {
    if (isNaN(+id)) return 'неправильный id';
    if (onefive.includes(+id)) return '1500 сгорающих бонусов';
    if (two.includes(+id)) return '2000 сгорающих бонусов';
    if (boxes.includes(+id)) return 'Бокс бьюти';
    if (five.includes(+id)) return '5000 бонусов';
    if (ten.includes(+id)) return '10000 бонусов';
    if (airpods.includes(+id)) return 'Airpods Pro';
    if (dyson.includes(+id)) return 'Dyson';
    if (iphone.includes(+id)) return 'iPhone 15';
    if (fifteen.includes(+id)) return '15000 бонусов';
    if (rub250k.includes(+id)) return '250k рублей';
    if (rub500k.includes(+id)) return '500к рублей';

    return 'Ничего((';
  }
}
