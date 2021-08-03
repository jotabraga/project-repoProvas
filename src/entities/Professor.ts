import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import Team from "./Team";
import Test from "./Test";

@Entity('professors')
export default class Professor {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  teams: Team[];

  tests: Test[];
}