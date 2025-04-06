CREATE TABLE space (
                       id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
                       uid VARCHAR(255) NOT NULL UNIQUE COMMENT '唯一标识符',
                       createdBy VARCHAR(255) NOT NULL COMMENT '创建人',
                       createdTime DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间，自动填充',
                       updatedBy VARCHAR(255) NOT NULL COMMENT '更新人',
                       updatedTime DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间，自动填充和更新',
                       dashboardCount INT NOT NULL DEFAULT 0 COMMENT '仪表盘数量',
                       private TINYINT(1) NOT NULL DEFAULT 0 COMMENT '是否私有，0: 否, 1: 是',
                       isTop TINYINT(1) NOT NULL DEFAULT 0 COMMENT '是否置顶，0: 否, 1: 是',
                       logo VARCHAR(255) DEFAULT NULL COMMENT 'logo地址',
                       name VARCHAR(255) NOT NULL UNIQUE COMMENT '空间名称'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='空间表';
