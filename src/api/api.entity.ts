import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("taskslist")
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;


}
