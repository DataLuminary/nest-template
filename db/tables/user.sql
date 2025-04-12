CREATE TABLE user (
                      id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '用户ID',
                      uid VARCHAR(36) NOT NULL UNIQUE COMMENT '用户唯一标识（唯一）,uuid.v7() 生成',
                      name VARCHAR(36) NOT NULL UNIQUE COMMENT '用户姓名（唯一）',
                      mobile VARCHAR(20) DEFAULT NULL UNIQUE COMMENT '手机号（唯一）',
                      email VARCHAR(128) DEFAULT NULL UNIQUE COMMENT '邮箱（唯一）',
                      password CHAR(60) NOT NULL COMMENT '用户密码（加密存储，固定长度）',
                      slat CHAR(60) NOT NULL COMMENT '加密盐 uuid.v4() 生成',
                      nickname VARCHAR(36) DEFAULT NULL COMMENT '用户昵称',
                      avatar VARCHAR(256) DEFAULT NULL COMMENT '用户昵称',
                      status ENUM('active', 'inactive', 'banned') NOT NULL DEFAULT 'active' COMMENT '用户状态（active: 启用, inactive: 禁用, banned: 封禁）',
                      creator VARCHAR(36) NOT NULL default 'signup' COMMENT '创建人',
                      created DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间，自动填充',
                      updater VARCHAR(36) NOT NULL default 'default' COMMENT '更新人',
                      updated DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间，自动填充和更新'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';
