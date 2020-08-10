import { Controller, Post, Get, Body, Delete, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PaymentsService } from './payments.service';
import { ProcessOrderDto } from './payments.dto';

@Controller('payments')
@ApiTags('payments')
export class PaymentController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('')
  @ApiBearerAuth()
  processOrder(@Body() data: ProcessOrderDto) {
    // mark payment status as created
    return this.paymentsService.processOrder(data);
  }
}
