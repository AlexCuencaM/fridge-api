import { FormTypeProductDto } from '../dtos/FormTypeProductDto';
import { GetTypeProductDto } from '../dtos/GetTypeProductDto';
import { TypeProduct } from '../entities/typeProduct';

export class TypeProductGetAdapter {
  static toDomain(dto: GetTypeProductDto): TypeProduct {
    const domain = new TypeProduct();
    domain.description = dto.description ?? '';
    return domain;
  }

  static toDto(domain: TypeProduct): GetTypeProductDto {
    const dto = new GetTypeProductDto();
    dto.description = domain.description ?? '';
    return dto;
  }
}
export class TypeProductFormAdapter {
  static toDomain(dto: FormTypeProductDto): TypeProduct {
    const domain = new TypeProduct();
    domain.id = dto.id;
    domain.description = dto.description ?? '';
    return domain;
  }

  static toDto(domain: TypeProduct): FormTypeProductDto {
    const dto = new FormTypeProductDto();
    dto.id = domain.id;
    dto.description = domain.description ?? '';
    return dto;
  }
}


