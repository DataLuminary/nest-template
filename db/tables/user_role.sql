CREATE TABLE user_role (
                       id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
                       user_id INT UNSIGNED NOT NULL COMMENT '用户ID',
                       role_id INT UNSIGNED NOT NULL COMMENT '角色ID',
                       creator VARCHAR(64) NOT NULL COMMENT '创建人',
                       created DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间，自动填充',
                       updater VARCHAR(64) NOT NULL COMMENT '更新人',
                       updated DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间，自动填充和更新'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户空间表';
