import {ForbiddenException, Injectable} from '@nestjs/common';
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
            if (error.code =='P2002'){
                throw new ForbiddenException('Email already registered!')
            }
            return error
        }


    }

    async login(authDTO: AuthDTO) {
        //find user with input email
        const user = await this.prismaService.user.findUnique({
            where:{
                email:authDTO.email
            }
        })
        if(!user){
            throw new ForbiddenException('User not exist!')
        }

        const passwordMatched = await argon.verify(
            user.password, //không phải là lỗi, ide báo sai
            authDTO.password)

        if(!passwordMatched){
            throw new ForbiddenException('Incorrect password!')
        }

        return user
    }
}

