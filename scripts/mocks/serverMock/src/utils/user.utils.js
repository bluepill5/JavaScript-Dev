import { faker } from '@faker-js/faker';
faker.locale = 'es';

export default function generateUsers() {
    return {
        nombre: faker.name.findName(),
        emial: faker.internet.email(),
        website: faker.internet.url(),
        image: faker.image.imageUrl(),
    }
}
