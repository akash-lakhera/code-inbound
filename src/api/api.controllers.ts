import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller("api")
export class ApiController {
  constructor(private readonly tasksService: ApiService) {}
  @Get()//get all tasks
  findAll() {
    console.log("all path")
    return this.tasksService.findAll();

  }

  @Post()//add a new task
  create(@Body() body:any) {
    console.log(body.name)
    return this.tasksService.create(body);

  }

  @Get(':id')//get this task
  findOne(@Param('id') id: number) {
    return  `task : ${id}`;
  }

  @Delete(':id')//delete this task
  remove(@Param('id') id: string) {
    return `deleted ${id} task`;
  }

 
}
