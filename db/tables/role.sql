CREATE TABLE role (
                       id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
                       code VARCHAR(64) NOT NULL UNIQUE COMMENT '唯一标识符',
                       status TINYINT NOT NULL DEFAULT 1 COMMENT '状态：1启用，0禁用',
                       name VARCHAR(128) NOT NULL UNIQUE COMMENT '角色名称',
                       creator VARCHAR(128) NOT NULL COMMENT '创建人',
                       created DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间，自动填充',
                       updater VARCHAR(128) NOT NULL COMMENT '更新人',
                       updated DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间，自动填充和更新'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='角色表';
