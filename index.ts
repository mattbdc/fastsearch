// import {drizzle, BunSQLiteDatabase} from 'drizzle-orm/bun-sqlite';
// import {Database} from 'bun:sqlite';
// import {sqliteTable, text} from "drizzle-orm/sqlite-core";
// import {migrate} from "drizzle-orm/bun-sqlite/migrator";
// import {users} from "./schema.ts";
import {faker} from '@faker-js/faker';
// import {ilike, like, sql} from "drizzle-orm";

// const sqlite = new Database('file.sqlite');
// const db: BunSQLiteDatabase = drizzle<{}>(sqlite);

const people = []
for (let i = 0; i < 100000; i++) {
    const person = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        gender: faker.person.gender(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        country: faker.location.country(),
        note: faker.lorem.sentence(10)
    }

    people.push(person)
}

const timed = async (fn: any) => {
    const start = performance.now()
    await fn()
    const end = performance.now()
    console.log("Took: " + (end - start) + "ms")
}

await timed(async () => {
    const count = people.filter(p => p.lastName.startsWith("A")).length
    console.log(count)
})
await timed(async () => {
    const count = people.filter(p => p.lastName.startsWith("F")).length
    console.log(count)
})
