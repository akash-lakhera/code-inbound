import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';


@Controller("api")
export class AppController {
 
  @Get()//get all tasks
  findAll() {
    return "All tasks"
  }

  @Post()//add a new task
  create(@Body() body:any) {
    console.log(body.name)
    return 'Task created';
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
