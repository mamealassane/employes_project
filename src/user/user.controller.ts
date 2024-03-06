import { Controller, Post , Body , Get , Param , Put , Delete} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { User } from './user.model';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(): Promise<User[]> {
    return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
    }
    
    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto): Promise<User> {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<User> {
    return this.userService.delete(id);
    }

}
