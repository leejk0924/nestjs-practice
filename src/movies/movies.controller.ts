import { Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}
  @Get()
  getAll() {
    return 'This is will return all movies';
  }
  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one move with the id: ${movieId}`;
  }
  @Post()
  create() {
    return 'This will create a movie';
  }
  @Post('/:id')
  remove(@Param('id') movieId: string) {
    return `This will remove a movie with the id : ${movieId}`;
  }
  @Patch('/:id')
  path(@Param('id') movieId: string) {
    return `This is will Patch a movie with the id: ${movieId}`;
  }
}
