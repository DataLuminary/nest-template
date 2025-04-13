// 定义明确的 payload 类型接口
export interface JwtPayload {
  sub: number;
  uid: string;
  name: string;
  iat?: number;
  exp?: number;
}
