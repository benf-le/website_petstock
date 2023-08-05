import {Body, Controller, Get, Post} from "@nestjs/common";
import {ProductsDTO} from "./dto";
import {ProductsService} from "./products.service";


@Controller({})

export class ProductsController{

    constructor(private productsService: ProductsService) {

    }
    @Get(`showProducts`) // register a new user
    async getProducts(productsDTO:ProductsDTO){
        return await this.productsService.getProducts(productsDTO)
    }

    @Get("showProductsSale") // register a new user
    async getProductsSale(productsDTO:ProductsDTO){
        return await this.productsService.getProductsSale(productsDTO)
    }

}