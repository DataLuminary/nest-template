export enum ErrorEnum {
  DEFAULT = "0:未知错误",
  SERVER_ERROR = "500:服务繁忙，请稍后再试",

  SYSTEM_USER_EXISTS = "1001:用户已存在",
  INVALID_VERIFICATION_CODE = "1002:验证码填写有误",
  INVALID_USERNAME_PASSWORD = "1003:用户名密码有误",
  PASSWORD_MISMATCH = "1011:旧密码与原密码不一致",
  USER_NOT_FOUND = "1017:用户不存在",
  INVALID_LOGIN = "1101:登录无效，请重新登录",
  NO_PERMISSION = "1102:无权限访问",
  ONLY_ADMIN_CAN_LOGIN = "1103:不是管理员，无法登录",
  REQUEST_INVALIDATED = "1104:当前请求已失效",
  ACCOUNT_LOGGED_IN_ELSEWHERE = "1105:您的账号已在其他地方登录",
  GUEST_ACCOUNT_RESTRICTED_OPERATION = "1106:游客账号不允许操作",
  REQUESTED_RESOURCE_NOT_FOUND = "1107:所请求的资源不存在",

  TOO_MANY_REQUESTS = "1201:请求频率过快，请一分钟后再试",
  MAXIMUM_FIVE_VERIFICATION_CODES_PER_DAY = "1202:一天最多发送5条验证码",
  VERIFICATION_CODE_SEND_FAILED = "1203:验证码发送失败",

  DIR_EXIST = "1401:当前创建的目录已存在",
  FILE_EXIST = "1401:当前文件已存在",
}
