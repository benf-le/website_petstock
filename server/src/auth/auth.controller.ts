import {Body, Controller, Post, Req} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {register} from "tsconfig-paths";

@Controller({})
export class AuthController {
    constructor(private authService: AuthService) {

    }
    // some request form client
    @Post("register") // register a new user
    register(@Body body:AuthDTO){
        console.log(body);
        return  this.authService.register()
    }

    @Post("login")
    login(){
        return this.authService.login()
    }
}
