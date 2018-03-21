DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;
CREATE TABLE `roles` (
  `id`  bigint(20) NOT NULL AUTO_INCREMENT ,
  `name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' ,
  PRIMARY KEY (`id`)
)
  ENGINE=InnoDB
  DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
  AUTO_INCREMENT=10
  ROW_FORMAT=DYNAMIC
;

CREATE TABLE `users` (
  `id`  bigint(20) NOT NULL AUTO_INCREMENT ,
  `name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' ,
  `salary`  int(11) NOT NULL ,
  `role_id`  bigint(20) NOT NULL ,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  INDEX `FKcogjq1smjy03v5s2wfegritx6` (`role_id`) USING BTREE
)
  ENGINE=InnoDB
  DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
  AUTO_INCREMENT=1
  ROW_FORMAT=DYNAMIC
;

