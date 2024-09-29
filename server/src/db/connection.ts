import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import pg from 'pg'

dotenv.config();
const { Client } = pg
const client = new Client({
    user: process.env.DB_USER ?? "postgres",
    database: process.env.DB_NAME ?? "postgres"
    // password:
    // host: "localhost",
    // port: 5432,
})

async function configSequelize(): Promise<Sequelize> {
    const sequelize = process.env.DB_URL
        ? new Sequelize(process.env.DB_URL)
        : new Sequelize(
            process.env.DB_NAME || '',
            process.env.DB_USER || '',
            process.env.DB_PASSWORD,
            {
                host: 'localhost',
                dialect: 'postgres',
                schema: 'public', // change to your desired schema name
                dialectOptions: {
                    decimalNumbers: true,
                },
            }
        );

    return sequelize
}

async function setupDBConnection(): Promise<Sequelize> {
    let sequelize: Sequelize | null = null

    await client.connect()
    // create DATABASE
    await client.query(`CREATE DATABASE ${process.env.DB_NAME ?? "postgres"}`, () => { });
    // create SCHEMA
    await client.query(`CREATE SCHEMA IF NOT EXISTS ${process.env.DB_SCHEMA ?? "postgres"};`)   // make SCHEMA our default
    // set SCHEMA to our default
    await client.query(`SET search_path TO ${process.env.DB_SCHEMA ?? "public"};`)

    sequelize = await configSequelize();
    return sequelize
}

export default setupDBConnection