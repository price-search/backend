import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Offer } from '../../offers/offer.entity';

export default class CreateOffers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Offer)().createMany(5*28);
  }
}
