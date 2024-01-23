import {
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { CardDto } from './card.dto';
import { Type } from 'class-transformer';

export class CreateChargeDto {
  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested() // valida itens dentro
  @Type(() => CardDto) // transforma o valor de texto plano para tipo
  card: CardDto;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
