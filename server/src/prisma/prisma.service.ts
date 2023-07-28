import {Injectable} from '@nestjs/common';
import {PrismaClient} from "@prisma/client";

@Injectable({})
export class PrismaService extends PrismaClient{
    constructor() {
        super({
            datasources:{
                db:{
                    url:'mongodb+srv://benf_le:5DjyX8kWjKXph1bv@cluster0.lmkegwz.mongodb.net/pet_stock?retryWrites=true&w=majority'
                }
            }
        });
    }

}

