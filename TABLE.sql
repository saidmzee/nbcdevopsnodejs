-- nbc.transfers definition

CREATE TABLE `transfers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullName` varchar(255) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `accountNumber` varchar(20) NOT NULL,
  `referenceNumber` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;