import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {AuthDTO} from "./dto";
import * as argon from "argon2";


@Injectable({})
export class AuthService {
    constructor(private prismaService: PrismaService) {

    }

    async register(authDTO: AuthDTO) {
        // ma hoa password
        const hashedPassword = await argon.hash(authDTO.password)

        try {
            // them data vao database
            const user = await this.prismaService.user.create({
                data: {
                    email: authDTO.email,
                    password: hashedPassword,
                    firstName: '',
                    lastName: '',
                },
                // chỉ hiện ra các trường có true, khi trả data về
                select: {
                    id: true,
                    email: true,
                    createdAt: true
                }
            })
            return user
        } catch (error) {
            return error
        }


    }

    login() {
        return 'Login'
    }
}

