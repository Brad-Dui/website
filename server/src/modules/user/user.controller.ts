import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  Query,
  UseGuards,
  Headers,
  UsePipes,
  ValidationPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ResultModel } from 'src/common/result/ResultModel';
import { CreateUserDto } from './dto/create-user.dto';
import { validate } from 'class-validator';
import { RolesGuard } from 'src/common/guards';
import { Public } from 'src/common/decorators/public.decorator';
import { Request } from 'express';
import { PaginationDto } from 'src/common/dtos';

@Controller('users')
@UsePipes(new ValidationPipe({ whitelist: true }))
export class UserController {
  constructor(private userService: UserService) {}
  // @Get()
  // async findAllUser() {
  //   let res;
  //   try {
  //     res = await this.userService.findAll();
  //   } catch (error) {
  //     return ResultModel.builderErrorMsg(error.message);
  //   }
  //   return res;
  // }
  @Public()
  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Get()
  async getUserList(@Query() paginationDto: PaginationDto) {
    return this.userService.queryPages(paginationDto);
  }

  @Put()
  updateUser() {}

  @Delete()
  deleteUser() {}
}
