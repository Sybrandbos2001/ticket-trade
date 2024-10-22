import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, Matches } from 'class-validator';
import { ITicket, IUser } from "@ticket-trade/domain";
import { TicketSchema } from '../../ticket/entities/ticket.entity';
import { Prop } from '@nestjs/mongoose';

export class CreateUserDto implements IUser {
    
    // DB is responsible for ID

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    lastname: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsPhoneNumber(null, { message: 'Use the following phone number format : +31 6 12345678' })
    phone: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
    })
    password: string;

    @Prop({ type: [TicketSchema], default: [] }) // Automatically set to an empty array for tickets
    tickets: ITicket[];
}
