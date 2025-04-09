CREATE TABLE space (
                       id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
                       uid VARCHAR(64) NOT NULL UNIQUE COMMENT '唯一标识符',
                       name VARCHAR(128) NOT NULL UNIQUE COMMENT '空间名称',
                       private TINYINT NOT NULL DEFAULT 0 COMMENT '是否私有，0 表示否，1 表示是',
                       is_top TINYINT NOT NULL DEFAULT 0 COMMENT '是否置顶，0 表示否，1 表示是',
                       logo VARCHAR(255) DEFAULT NULL COMMENT 'logo地址',
                       creator VARCHAR(128) NOT NULL COMMENT '创建人',
                       created DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间，自动填充',
                       updater VARCHAR(128) NOT NULL COMMENT '更新人',
                       updated DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间，自动填充和更新'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='空间表';
