import { Accounts } from '../entity/accounts'
import { Sessions } from '../entity/sessions'
import { Users } from '../entity/users'
import { Todos } from '../entity/todo'
import { VerificationRequests } from '../entity/verificationRequests'
import { Connection, ConnectionManager, ConnectionOptions, createConnection, getConnectionManager } from "typeorm";

export class Database {
  private connectionManager: ConnectionManager;

  constructor() {
    this.connectionManager = getConnectionManager();
  }

  public async getConnection(name: string): Promise<Connection> {
    const CONNECTION_NAME: string = name;
    let connection: Connection;
    const hasConnection = this.connectionManager.has(CONNECTION_NAME);
    if (hasConnection) {
      connection = this.connectionManager.get(CONNECTION_NAME);
      if (!connection.isConnected) {
        connection = await connection.connect();
      }
    } else {

      const connectionOptions: ConnectionOptions = {
        name: "default",
        type: "postgres",
        host: process.env.POSTGRES_HOST as string,
        port: parseInt(process.env.POSTGRES_PORT as string),
        username: process.env.POSTGRES_USER as string,
        password: process.env.POSTGRES_PASSWORD as string,
        database: process.env.POSTGRES_DB as string,
        entities: [Accounts, Sessions, Users, VerificationRequests, Todos],
        synchronize: false,
        migrationsRun: true,
        logging: false,
        migrations: ['src/migration/**/*.ts'],
        subscribers: ['src/subscriber/**/*.ts'],
      };
      connection = await createConnection(connectionOptions);
    }
    return connection;
  }
}