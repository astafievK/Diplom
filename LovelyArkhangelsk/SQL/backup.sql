-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: lovely_arkhangelsk
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Table structure for table `completed_work`
--

DROP TABLE IF EXISTS `completed_work`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `completed_work` (
  `idEmployee` int NOT NULL,
  `idImage` int NOT NULL,
  `idService` int NOT NULL,
  PRIMARY KEY (`idEmployee`,`idImage`,`idService`),
  KEY `fk_employer_has_image_image1_idx` (`idImage`),
  KEY `fk_employer_has_image_employer1_idx` (`idEmployee`),
  KEY `fk_completed_work_service1_idx` (`idService`),
  CONSTRAINT `fk_completed_work_service1` FOREIGN KEY (`idService`) REFERENCES `service` (`idService`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_employer_has_image_employer1` FOREIGN KEY (`idEmployee`) REFERENCES `employee` (`idEmployee`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_employer_has_image_image1` FOREIGN KEY (`idImage`) REFERENCES `image` (`idImage`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `completed_work`
--

LOCK TABLES `completed_work` WRITE;
/*!40000 ALTER TABLE `completed_work` DISABLE KEYS */;
/*!40000 ALTER TABLE `completed_work` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `idEmployee` int NOT NULL AUTO_INCREMENT,
  `experience` int NOT NULL,
  `idImage` int NOT NULL,
  PRIMARY KEY (`idEmployee`),
  KEY `fk_employee_image1_idx` (`idImage`),
  CONSTRAINT `fk_employee_image1` FOREIGN KEY (`idImage`) REFERENCES `image` (`idImage`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee_has_service`
--

DROP TABLE IF EXISTS `employee_has_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee_has_service` (
  `idEmployeeHasService` int NOT NULL AUTO_INCREMENT,
  `idEmployee` int NOT NULL,
  `idService` int NOT NULL,
  `price` int DEFAULT NULL,
  `duration` int DEFAULT NULL,
  PRIMARY KEY (`idEmployeeHasService`),
  KEY `fk_employer_has_service_service1_idx` (`idService`),
  KEY `fk_employer_has_service_employer1_idx` (`idEmployee`),
  CONSTRAINT `fk_employer_has_service_employer1` FOREIGN KEY (`idEmployee`) REFERENCES `employee` (`idEmployee`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_employer_has_service_service1` FOREIGN KEY (`idService`) REFERENCES `service` (`idService`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_has_service`
--

LOCK TABLES `employee_has_service` WRITE;
/*!40000 ALTER TABLE `employee_has_service` DISABLE KEYS */;
/*!40000 ALTER TABLE `employee_has_service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `idImage` int NOT NULL AUTO_INCREMENT,
  `path` varchar(150) NOT NULL DEFAULT 'empty.png',
  PRIMARY KEY (`idImage`),
  UNIQUE KEY `path_UNIQUE` (`path`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,'no-photo.jpg');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `idRole` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  PRIMARY KEY (`idRole`),
  UNIQUE KEY `title_UNIQUE` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Администратор'),(3,'Клиент'),(2,'Мастер');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service` (
  `idService` int NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `description` varchar(400) DEFAULT NULL,
  `duration` int NOT NULL,
  `price` int NOT NULL,
  `idImage` int NOT NULL,
  PRIMARY KEY (`idService`),
  UNIQUE KEY `title_UNIQUE` (`title`),
  KEY `fk_service_image1_idx` (`idImage`),
  CONSTRAINT `fk_service_image1` FOREIGN KEY (`idImage`) REFERENCES `image` (`idImage`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_history`
--

DROP TABLE IF EXISTS `service_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_history` (
  `idServiceHistory` int NOT NULL AUTO_INCREMENT,
  `status` enum('Завершено','В ожидании','Отменено') NOT NULL DEFAULT 'В ожидании',
  `day` tinyint NOT NULL,
  `month` tinyint NOT NULL,
  `year` int NOT NULL,
  `hours` tinyint NOT NULL,
  `minutes` tinyint NOT NULL,
  `idUser` int NOT NULL,
  `idEmployeeHasService` int NOT NULL,
  PRIMARY KEY (`idServiceHistory`),
  KEY `fk_user_has_service_has_service_category_user1_idx` (`idUser`),
  KEY `fk_service_history_employee_has_service1_idx` (`idEmployeeHasService`),
  CONSTRAINT `fk_service_history_employee_has_service1` FOREIGN KEY (`idEmployeeHasService`) REFERENCES `employee_has_service` (`idEmployeeHasService`),
  CONSTRAINT `fk_user_has_service_has_service_category_user1` FOREIGN KEY (`idUser`) REFERENCES `user` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_history`
--

LOCK TABLES `service_history` WRITE;
/*!40000 ALTER TABLE `service_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `service_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `phoneNumber` varchar(11) NOT NULL,
  `password` varchar(350) NOT NULL,
  `name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  `patronymic` varchar(45) NOT NULL,
  `idRole` int NOT NULL,
  `idEmployee` int DEFAULT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `phone_number_UNIQUE` (`phoneNumber`),
  UNIQUE KEY `idEmployee_UNIQUE` (`idEmployee`),
  KEY `fk_user_role1_idx` (`idRole`),
  KEY `fk_user_employee1_idx` (`idEmployee`),
  CONSTRAINT `fk_user_employee1` FOREIGN KEY (`idEmployee`) REFERENCES `employee` (`idEmployee`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_user_role1` FOREIGN KEY (`idRole`) REFERENCES `role` (`idRole`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','$2b$07$NFjENecC3qAWZ9Y0kNLqVuAPRjjhcOGItisNy65S5xi7Ac22Z7Y/K','admin','admin','admin',1,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_photo`
--

DROP TABLE IF EXISTS `work_photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_photo` (
  `idWorkPhoto` int NOT NULL AUTO_INCREMENT,
  `idImage` int NOT NULL,
  `idEmployee` int NOT NULL,
  PRIMARY KEY (`idWorkPhoto`),
  KEY `fk_work_photo_image1_idx` (`idImage`),
  KEY `fk_work_photo_employee1_idx` (`idEmployee`),
  CONSTRAINT `fk_work_photo_employee1` FOREIGN KEY (`idEmployee`) REFERENCES `employee` (`idEmployee`),
  CONSTRAINT `fk_work_photo_image1` FOREIGN KEY (`idImage`) REFERENCES `image` (`idImage`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_photo`
--

LOCK TABLES `work_photo` WRITE;
/*!40000 ALTER TABLE `work_photo` DISABLE KEYS */;
/*!40000 ALTER TABLE `work_photo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-11 15:08:08
