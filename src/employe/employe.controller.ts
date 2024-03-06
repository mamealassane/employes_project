import { Controller ,Post , Body , Get , Param , Put , Delete} from '@nestjs/common';
import { EmployeService } from './employe.service';
import { Employe } from './employe.model';
import { CreateEmployeDto } from './employe.dto';

@Controller('employe')
export class EmployeController {
    constructor(private readonly employeService: EmployeService) {}

    @Get()
    findAll(): Promise<Employe[]> {
    return this.employeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Employe> {
    return this.employeService.findOne(id);
    }
    @Post()
    async create(@Body() createEmployeDto: CreateEmployeDto) {
        return await this.employeService.create(createEmployeDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() user: Employe): Promise<Employe> {
    return this.employeService.update(id, user);
    }
    @Delete(':id')
    delete(@Param('id') id: string): Promise<Employe> {
    return this.employeService.delete(id);
    }
}
