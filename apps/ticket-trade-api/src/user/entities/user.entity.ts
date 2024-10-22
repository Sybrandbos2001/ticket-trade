import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IUser } from '@ticket-trade/domain';
import { Ticket, TicketSchema } from '../../ticket/entities/ticket.entity';

export type UserDocument = User & Document;

@Schema()
export class User extends Document implements IUser {

    // DB is responsible for ID

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    lastname: string;

    @Prop({ required: true, unique: true }) // Username has to be unique
    username: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: true, unique: true }) // Email has to be unique
    email: string;

    @Prop({ required: true })
    password: string;
    
    @Prop({ type: [TicketSchema], default: [] }) // Array of tickets for quick querying
    tickets: Ticket[];
}

export const UserSchema = SchemaFactory.createForClass(User);