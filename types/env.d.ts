// generate by ./scripts/generateEnvTypes.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_NAME: "DataTalk";
      APP_PORT: "8084";
      APP_BASE_URL: "http://localhost:${APP_PORT}";
      APP_LOCALE: "zh-CN";
      PROJECT_DIR: "/nest-admin";
      MULTI_DEVICE_LOGIN: "true";
      LOGGER_LEVEL: "debug";
      LOGGER_MAX_FILES: "31";
      TZ: "Asia/Shanghai";
      JWT_SECRET: "admin!@";
      JWT_EXPIRE: "86400";
      REFRESH_TOKEN_SECRET: "admin!@";
      REFRESH_TOKEN_EXPIRE: "2592000";
      SWAGGER_ENABLE: "true";
      SWAGGER_PATH: "api-docs";
      SWAGGER_VERSION: "1.0";
      DB_HOST: "127.0.0.1";
      DB_PORT: "13307";
      DB_DATABASE: "data_talk";
      DB_USERNAME: "root";
      DB_PASSWORD: "admin";
      DB_SYNCHRONIZE: "true";
      DB_LOGGING: '["error"]';
      REDIS_PORT: "6379";
      REDIS_HOST: "127.0.0.1";
      REDIS_PASSWORD: "123456";
      REDIS_DB: "0";
      SMTP_HOST: "smtp.163.com";
      SMTP_PORT: "465";
      SMTP_USER: "nest_admin@163.com";
      SMTP_PASS: "VIPLLOIPMETTROYU";
    }
  }
}
export {};
