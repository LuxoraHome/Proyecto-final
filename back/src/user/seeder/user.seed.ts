import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { userMock } from "./user.mock";


@Injectable()
export class UserSeed {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    async createUserSeeder(){
        const preUser = (await this.userRepository.find()).map((user) => user.name)
        
        for(const userData of userMock){
            if(!preUser.some((userNmae) => userNmae === userData.name)){
                const newUser = new User();
                newUser.name = userData.name,
                newUser.email = userData.email,
                newUser.password = userData.password,
                newUser.phone = userData.phone,
                newUser.country = userData.country,
                newUser.city = userData.city,
                newUser.address = userData.address
                await this.userRepository.save(newUser)
            }else{
                return "Ya existen usuarios precargados"
            }
        }
    }
}