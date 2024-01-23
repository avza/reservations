import { IsCreditCard, IsNotEmpty, IsNumber } from 'class-validator';

export class CardDto {
  @IsCreditCard()
  @IsNotEmpty()
  number: string;

  @IsNumber()
  @IsNotEmpty()
  exp_month: number;

  @IsNumber()
  @IsNotEmpty()
  exp_year: number;

  @IsNumber()
  @IsNotEmpty()
  cvc: string;
}
