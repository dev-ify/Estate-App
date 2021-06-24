-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: nnenna
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `revenue_payment`
--

DROP TABLE IF EXISTS `revenue_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `revenue_payment` (
  `fullname` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `telephone` varchar(255) DEFAULT NULL,
  `type_payment` varchar(255) DEFAULT NULL,
  `amount_paid` varchar(255) DEFAULT NULL,
  `date_recieved` datetime DEFAULT CURRENT_TIMESTAMP,
  `receipt_no` varchar(255) DEFAULT NULL,
  `collected_by` int(11) DEFAULT NULL,
  `Status` varchar(255) DEFAULT NULL,
  `outstanding` varchar(255) DEFAULT NULL,
  `reciept` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `receipt_given` varchar(255) DEFAULT NULL,
  `receipt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `collected_by` (`collected_by`),
  CONSTRAINT `revenue_payment_ibfk_1` FOREIGN KEY (`collected_by`) REFERENCES `user` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `revenue_payment`
--

LOCK TABLES `revenue_payment` WRITE;
/*!40000 ALTER TABLE `revenue_payment` DISABLE KEYS */;
INSERT INTO `revenue_payment` VALUES ('ify venture',1,'08045924829','Change Of Apartment','5000','2021-06-11 17:39:24','fsNLO202122',37,'Confirmed','2000',NULL,NULL,'true','REN1245'),('ifeanyi Humprey',2,'08045924829','House Re-design / Restructuring','5000','2021-06-11 17:41:12','bQmNm2021509',37,'Confirmed','4000',NULL,NULL,'true','RZN2019');
/*!40000 ALTER TABLE `revenue_payment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-24 22:37:30
