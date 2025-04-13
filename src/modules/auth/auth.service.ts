import { BusinessException } from "@/common/exceptions/biz.exception";
import { md5 } from "@/utils/crypto";
import { ErrorEnum } from "@constants/error-code";
import type { LoginDto } from "@modules/auth/dto/login.dto";
import type { RegisterDto } from "@modules/auth/dto/register.dto";
import type { JwtPayload } from "@modules/auth/types";
import { UserEntity } from "@modules/users/entities/user.entity";
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { isEmpty } from "lodash";
import { Repository } from "typeorm";
import { v4 } from "uuid";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async validateUser(name: string, password: string) {
    const user = await this.userRepository.findOne({
      where: { name },
      // select: ["id", "slat", "password", "uid", "name", "nickname", "avatar"],
    });
    if (isEmpty(user)) {
      throw new NotFoundException(ErrorEnum.USER_NOT_FOUND);
    }
    const str = `${password}${user.slat}`;
    const comparePassword = md5(str);
    if (user.password !== comparePassword) {
      throw new UnauthorizedException(ErrorEnum.INVALID_USERNAME_PASSWORD);
    }
    // 不返回密码等敏刚信息
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: pwd, slat, ...result } = user;
    return result;
  }

  async login({ username, password }: LoginDto) {
    const user = await this.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }
    const { id, name, uid } = user;
    const payload = {
      sub: id,
      uid,
      name,
    };
    // 生成访问令牌
    const accessToken = this.jwtService.sign(payload);
    // 生成刷新令牌（有效期更长）
    const refreshToken = this.jwtService.sign(payload, { expiresIn: "7d" });
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      user: payload,
    };
  }

  async register(registerDto: RegisterDto) {
    const { password: pwdOrigin, ...rest } = registerDto;
    const slat = v4();
    const password = md5(`${pwdOrigin}${slat}`);
    const user = this.userRepository.create({ ...rest, password, slat });
    return this.userRepository.save(user);
  }

  async refreshToken(refreshToken: string) {
    try {
      // 验证刷新令牌
      const payload = this.jwtService.verify<JwtPayload>(refreshToken);
      const user = await this.userRepository.findOne({
        where: { id: payload.sub },
      });
      if (isEmpty(user)) {
        throw new BusinessException(ErrorEnum.INVALID_USERNAME_PASSWORD);
      }

      // 生成新的访问令牌
      const { id, name } = user;
      const newPayload = {
        sub: id,
        name,
      };

      return {
        access_token: this.jwtService.sign(newPayload),
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new UnauthorizedException("Invalid refresh token");
    }
  }
}
