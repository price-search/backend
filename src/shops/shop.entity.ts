import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Offer } from '../offers/offer.entity';

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name!: string;

  @Column()
  public address: string;

  @Column({ type: 'float' })
  public latitude: number;

  @Column({ type: 'float' })
  public longitude: number;

  @OneToMany(
    () => Offer,
    offer => offer.shop,
  )
  public offers!: Offer[];
}
