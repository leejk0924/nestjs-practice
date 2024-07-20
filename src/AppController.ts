import { Controller, Get } from "@nestjs/common";

@Controller('')
export class Appcontroller {
  @Get()
  home(): string {
    return 'Movie Api app';
  }
}