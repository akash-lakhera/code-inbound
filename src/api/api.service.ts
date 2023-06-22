import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './api.entity';
@Injectable()
export class ApiService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  create(createTask: any): Promise<Task> {
    const task = new Task();
    task.name = createTask.name;
    return this.taskRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  findOne(id: number): Promise<Task> {
    return this.taskRepository.findOneBy({ id: id });
  }

  async remove(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
}