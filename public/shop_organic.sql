-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 09, 2024 at 02:37 PM
-- Server version: 5.7.24
-- PHP Version: 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop_organic`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '$2b$10$46rxXrGmgPqk25SVEomGA.GJ6GZ6LKtYxRPmgD5wtGzTa6f5vGGfm', '2024-06-22', '2024-06-22');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `categories` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT '1',
  `imgURL` varchar(255) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `uid` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT '0',
  `sold` int(11) NOT NULL DEFAULT '0',
  `imgURL` varchar(255) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `description`, `quantity`, `sold`, `imgURL`, `createdAt`, `updatedAt`) VALUES
(2, 'ธัญพืช', 'ธรรมชาติแท้ 100%', 5, 17, 'Wed Jun 26 2024-Thu Jun 06 2024-grains.png', '2024-06-26', '2024-09-08'),
(3, 'พืชสวน', 'ธรรมชาติแท้ 100%', 9, 38, 'Wed Jun 26 2024-Thu Jun 06 2024-Horticulture.png', '2024-06-26', '2024-09-08'),
(4, 'พืชผัก', 'ธรรมชาติแท้ 100%', 6, 22, 'Wed Jun 26 2024-Thu Jun 06 2024-Vagetable.png', '2024-06-26', '2024-09-08');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `subject`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'ณัฐวุฒิ จำปาแสง', 'example@gmail.com', 'รูปภาพไม่มา', 'ภาพโหลดช้า ไม่มาบางรูป', '2024-06-30', '2024-06-30');

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `categories` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT '1',
  `imgURL` varchar(255) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `reference` varchar(255) NOT NULL,
  `tracking_id` varchar(255) DEFAULT NULL,
  `payment_menthod` varchar(255) DEFAULT NULL,
  `amount_total` decimal(32,2) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `quantity` int(11) DEFAULT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `address_id` int(11) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `reference`, `tracking_id`, `payment_menthod`, `amount_total`, `status`, `quantity`, `customer_name`, `user_id`, `address_id`, `createdAt`, `updatedAt`) VALUES
(1, 'SO11719413539036', NULL, 'QR Code PrompPay', '80.00', 1, 1, 'User Natthawut', 'user.natthawut@gmail.com', 1, '2024-06-26', '2024-06-26'),
(2, 'SO21719458310174', NULL, 'QR Code PrompPay', '85.00', 1, 1, 'natthawut jampasaeng', 'example@gmail.com', 2, '2024-06-27', '2024-06-27'),
(3, 'SO21719656113422', NULL, 'QR Code PrompPay', '80.00', 1, 1, 'natthawut jampasaeng', 'example@gmail.com', 2, '2024-06-29', '2024-06-29'),
(4, 'SO21719656194745', NULL, 'QR Code PrompPay', '80.00', 1, 1, 'natthawut jampasaeng', 'example@gmail.com', 2, '2024-06-29', '2024-06-29'),
(5, 'SO21719801761043', NULL, 'QR Code PrompPay', '85.00', 1, 1, 'natthawut jampasaeng', 'example@gmail.com', 2, '2024-07-01', '2024-07-01'),
(6, 'SO21719803527988', NULL, 'QR Code PrompPay', '90.00', 1, 1, 'natthawut jampasaeng', 'example@gmail.com', 2, '2024-07-01', '2024-07-01'),
(7, 'SO21719804305007', NULL, 'QR Code PrompPay', '98.00', 1, 1, 'natthawut jampasaeng', 'example@gmail.com', 2, '2024-07-01', '2024-07-01'),
(8, 'SO21719805619518', NULL, 'QR Code PrompPay', '160.00', 1, 3, 'natthawut jampasaeng', 'example@gmail.com', 2, '2024-07-01', '2024-07-01'),
(9, 'SO11719847761710', NULL, 'QR Code PrompPay', '133.00', 1, 2, 'User Natthawut', 'user.natthawut@gmail.com', 1, '2024-07-01', '2024-07-01'),
(10, 'SO11719849528496', NULL, 'QR Code PrompPay', '225.00', 1, 5, 'User Natthawut', 'user.natthawut@gmail.com', 1, '2024-07-01', '2024-07-01'),
(11, 'SO11719849592769', NULL, 'QR Code PrompPay', '613.00', 1, 15, 'User Natthawut', 'user.natthawut@gmail.com', 1, '2024-07-01', '2024-07-01'),
(12, 'SO11719849792034', NULL, 'QR Code PrompPay', '619.00', 1, 15, 'User Natthawut', 'user.natthawut@gmail.com', 1, '2024-07-01', '2024-07-01'),
(13, 'SO11719850208960', NULL, 'QR Code PrompPay', '128.00', 1, 2, 'User Natthawut', 'user.natthawut@gmail.com', 1, '2024-07-01', '2024-07-01'),
(14, 'SO11719850226805', NULL, 'QR Code PrompPay', '163.00', 1, 3, 'User Natthawut', 'user.natthawut@gmail.com', 1, '2024-07-01', '2024-07-01'),
(15, 'SO11719853070450', NULL, 'QR Code PrompPay', '343.00', 1, 8, 'User Natthawut', 'user.natthawut@gmail.com', 1, '2024-07-01', '2024-07-01'),
(16, 'SO11719853357355', 'KEX41329731463', 'QR Code PrompPay', '128.00', 2, 2, 'User Natthawut', 'user.natthawut@gmail.com', 1, '2024-07-02', '2024-07-25'),
(17, 'SO11719855199181', NULL, 'QR Code PrompPay', '115.00', 1, 2, 'User Natthawut', 'user.natthawut@gmail.com', 1, '2024-07-02', '2024-07-02'),
(18, 'SO11719855279864', NULL, 'QR Code PrompPay', '98.00', 1, 1, 'User Natthawut', 'user.natthawut@gmail.com', 1, '2024-07-02', '2024-07-02'),
(19, 'SO11719855417241', NULL, 'QR Code PrompPay', '98.00', 1, 1, 'User Natthawut', 'user.natthawut@gmail.com', 1, '2024-07-02', '2024-07-02'),
(20, 'SO11719855537886', NULL, 'QR Code PrompPay', '98.00', 1, 1, 'User Natthawut', 'user.natthawut@gmail.com', 1, '2024-07-02', '2024-07-02'),
(21, 'SO11719855617249', NULL, 'QR Code PrompPay', '128.00', 1, 2, 'User Natthawut', 'user.natthawut@gmail.com', 1, '2024-07-02', '2024-07-02'),
(22, 'SO11719855703594', NULL, 'QR Code PrompPay', '85.00', 1, 1, 'User Natthawut', 'user.natthawut@gmail.com', 1, '2024-07-02', '2024-07-02'),
(23, 'SO11719855827682', NULL, 'QR Code PrompPay', '85.00', 1, 1, 'User Natthawut', 'user.natthawut@gmail.com', 1, '2024-07-02', '2024-07-02'),
(24, 'SO11725775872644', NULL, 'QR Code PrompPay', '163.00', 1, 3, 'User Natthawut', 'user.natthawut@gmail.com', 1, '2024-09-08', '2024-09-08'),
(25, 'SO11725775983651', NULL, 'QR Code PrompPay', '145.00', 1, 3, 'User Natthawut', 'user.natthawut@gmail.com', 1, '2024-09-08', '2024-09-08');

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `categories` varchar(255) DEFAULT NULL,
  `imgURL` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT '1',
  `product_id` int(11) DEFAULT NULL,
  `user_id` varchar(255) NOT NULL,
  `order_id` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`id`, `name`, `categories`, `imgURL`, `price`, `quantity`, `product_id`, `user_id`, `order_id`, `createdAt`, `updatedAt`) VALUES
(1, 'แครอท 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-carrot.png', 30, 1, 5, 'user.natthawut@gmail.com', 1, '2024-06-26', '2024-06-26'),
(2, 'ทับทิบ 1 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Fri Jun 14 2024-Pomegranate.jpg', 35, 1, 1, 'example@gmail.com', 2, '2024-06-27', '2024-06-27'),
(3, 'แครอท 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-carrot.png', 30, 1, 5, 'example@gmail.com', 3, '2024-06-29', '2024-06-29'),
(4, 'แครอท 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-carrot.png', 30, 1, 5, 'example@gmail.com', 4, '2024-06-29', '2024-06-29'),
(5, 'ทับทิบ 1 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Fri Jun 14 2024-Pomegranate.jpg', 35, 1, 1, 'example@gmail.com', 5, '2024-07-01', '2024-07-01'),
(6, 'มะเขือเทศ 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-tometo.jpg', 40, 1, 18, 'example@gmail.com', 6, '2024-07-01', '2024-07-01'),
(7, 'กล้วย 5 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-banana.jpg', 48, 1, 2, 'example@gmail.com', 7, '2024-07-01', '2024-07-01'),
(8, 'แตงโม 3 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Fri Jun 14 2024-watermelon.png', 40, 1, 20, 'example@gmail.com', 8, '2024-07-01', '2024-07-01'),
(9, 'ลิ้นจี่ 1 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-lychee.jpg', 30, 1, 10, 'example@gmail.com', 8, '2024-07-01', '2024-07-01'),
(10, 'ลูกเดือย 1 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-millet.png', 40, 1, 12, 'example@gmail.com', 8, '2024-07-01', '2024-07-01'),
(11, 'กล้วย 5 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-banana.jpg', 48, 1, 2, 'user.natthawut@gmail.com', 9, '2024-07-01', '2024-07-01'),
(12, 'แก้วมังกร 2 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-dragon-fruit.jpg', 35, 1, 8, 'user.natthawut@gmail.com', 9, '2024-07-01', '2024-07-01'),
(13, 'ทับทิบ 1 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Fri Jun 14 2024-Pomegranate.jpg', 35, 1, 1, 'user.natthawut@gmail.com', 10, '2024-07-01', '2024-07-01'),
(14, 'ผักกวาดขาว 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-Chinese-Cabbage.jpg', 35, 1, 6, 'user.natthawut@gmail.com', 10, '2024-07-01', '2024-07-01'),
(15, 'แตงกวา 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-cucumber.jpg', 40, 1, 7, 'user.natthawut@gmail.com', 10, '2024-07-01', '2024-07-01'),
(16, 'แก้วมังกร 2 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-dragon-fruit.jpg', 35, 1, 8, 'user.natthawut@gmail.com', 10, '2024-07-01', '2024-07-01'),
(17, 'ถั่วดำ 500 กรัม', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-black_beans.jpg', 30, 1, 3, 'user.natthawut@gmail.com', 10, '2024-07-01', '2024-07-01'),
(18, 'ทับทิบ 1 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Fri Jun 14 2024-Pomegranate.jpg', 35, 1, 1, 'user.natthawut@gmail.com', 11, '2024-07-01', '2024-07-01'),
(19, 'ถั่วดำ 500 กรัม', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-black_beans.jpg', 30, 1, 3, 'user.natthawut@gmail.com', 11, '2024-07-01', '2024-07-01'),
(20, 'กล้วย 5 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-banana.jpg', 48, 1, 2, 'user.natthawut@gmail.com', 11, '2024-07-01', '2024-07-01'),
(21, 'กะหล่ำปี 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-cabbage.png', 35, 1, 4, 'user.natthawut@gmail.com', 11, '2024-07-01', '2024-07-01'),
(22, 'แครอท 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-carrot.png', 30, 1, 5, 'user.natthawut@gmail.com', 11, '2024-07-01', '2024-07-01'),
(23, 'ลิ้นจี่ 1 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-lychee.jpg', 30, 1, 10, 'user.natthawut@gmail.com', 11, '2024-07-01', '2024-07-01'),
(24, 'ถั่วเขียว 500 กรัม', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-green-beans.jpg', 35, 1, 9, 'user.natthawut@gmail.com', 11, '2024-07-01', '2024-07-01'),
(25, 'แก้วมังกร 2 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-dragon-fruit.jpg', 35, 1, 8, 'user.natthawut@gmail.com', 11, '2024-07-01', '2024-07-01'),
(26, 'แตงกวา 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-cucumber.jpg', 40, 1, 7, 'user.natthawut@gmail.com', 11, '2024-07-01', '2024-07-01'),
(27, 'ผักกวาดขาว 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-Chinese-Cabbage.jpg', 35, 1, 6, 'user.natthawut@gmail.com', 11, '2024-07-01', '2024-07-01'),
(28, 'มะม่วง 1 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-mango.jpg', 35, 1, 11, 'user.natthawut@gmail.com', 11, '2024-07-01', '2024-07-01'),
(29, 'ลูกเดือย 1 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-millet.png', 40, 1, 12, 'user.natthawut@gmail.com', 11, '2024-07-01', '2024-07-01'),
(30, 'สับปรด 3 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-pineapple.jpg', 55, 1, 13, 'user.natthawut@gmail.com', 11, '2024-07-01', '2024-07-01'),
(31, 'ส้มโอ 3 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-pomelo.jpg', 50, 1, 14, 'user.natthawut@gmail.com', 11, '2024-07-01', '2024-07-01'),
(32, 'งาดำ 500 กรัม', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-poppy.jpg', 30, 1, 15, 'user.natthawut@gmail.com', 11, '2024-07-01', '2024-07-01'),
(33, 'หัวไชเท้า 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-radish.jpg', 35, 1, 16, 'user.natthawut@gmail.com', 12, '2024-07-01', '2024-07-01'),
(34, 'ถั่วแดง 500 กรัม', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-red_beans.png', 35, 1, 17, 'user.natthawut@gmail.com', 12, '2024-07-01', '2024-07-01'),
(35, 'สับปรด 3 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-pineapple.jpg', 55, 1, 13, 'user.natthawut@gmail.com', 12, '2024-07-01', '2024-07-01'),
(36, 'ลูกเดือย 1 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-millet.png', 40, 1, 12, 'user.natthawut@gmail.com', 12, '2024-07-01', '2024-07-01'),
(37, 'มะม่วง 1 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-mango.jpg', 35, 1, 11, 'user.natthawut@gmail.com', 12, '2024-07-01', '2024-07-01'),
(38, 'มะเขือเทศ 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-tometo.jpg', 40, 1, 18, 'user.natthawut@gmail.com', 12, '2024-07-01', '2024-07-01'),
(39, 'ถั่วขาว 500 กรัม', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-white_kidney_beans.jpg', 34, 1, 19, 'user.natthawut@gmail.com', 12, '2024-07-01', '2024-07-01'),
(40, 'ส้มโอ 3 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-pomelo.jpg', 50, 1, 14, 'user.natthawut@gmail.com', 12, '2024-07-01', '2024-07-01'),
(41, 'งาดำ 500 กรัม', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-poppy.jpg', 30, 1, 15, 'user.natthawut@gmail.com', 12, '2024-07-01', '2024-07-01'),
(42, 'แตงโม 3 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Fri Jun 14 2024-watermelon.png', 40, 1, 20, 'user.natthawut@gmail.com', 12, '2024-07-01', '2024-07-01'),
(43, 'ถั่วเขียว 500 กรัม', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-green-beans.jpg', 35, 1, 9, 'user.natthawut@gmail.com', 12, '2024-07-01', '2024-07-01'),
(44, 'แก้วมังกร 2 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-dragon-fruit.jpg', 35, 1, 8, 'user.natthawut@gmail.com', 12, '2024-07-01', '2024-07-01'),
(45, 'แตงกวา 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-cucumber.jpg', 40, 1, 7, 'user.natthawut@gmail.com', 12, '2024-07-01', '2024-07-01'),
(46, 'ลิ้นจี่ 1 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-lychee.jpg', 30, 1, 10, 'user.natthawut@gmail.com', 12, '2024-07-01', '2024-07-01'),
(47, 'กะหล่ำปี 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-cabbage.png', 35, 1, 4, 'user.natthawut@gmail.com', 12, '2024-07-01', '2024-07-01'),
(48, 'กล้วย 5 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-banana.jpg', 48, 1, 2, 'user.natthawut@gmail.com', 13, '2024-07-01', '2024-07-01'),
(49, 'ถั่วดำ 500 กรัม', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-black_beans.jpg', 30, 1, 3, 'user.natthawut@gmail.com', 13, '2024-07-01', '2024-07-01'),
(50, 'ทับทิบ 1 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Fri Jun 14 2024-Pomegranate.jpg', 35, 1, 1, 'user.natthawut@gmail.com', 14, '2024-07-01', '2024-07-01'),
(51, 'กล้วย 5 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-banana.jpg', 48, 1, 2, 'user.natthawut@gmail.com', 14, '2024-07-01', '2024-07-01'),
(52, 'ถั่วดำ 500 กรัม', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-black_beans.jpg', 30, 1, 3, 'user.natthawut@gmail.com', 14, '2024-07-01', '2024-07-01'),
(53, 'ทับทิบ 1 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Fri Jun 14 2024-Pomegranate.jpg', 35, 1, 1, 'user.natthawut@gmail.com', 15, '2024-07-01', '2024-07-01'),
(54, 'กล้วย 5 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-banana.jpg', 48, 1, 2, 'user.natthawut@gmail.com', 15, '2024-07-01', '2024-07-01'),
(55, 'ผักกวาดขาว 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-Chinese-Cabbage.jpg', 35, 1, 6, 'user.natthawut@gmail.com', 15, '2024-07-01', '2024-07-01'),
(56, 'แตงกวา 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-cucumber.jpg', 40, 1, 7, 'user.natthawut@gmail.com', 15, '2024-07-01', '2024-07-01'),
(57, 'แก้วมังกร 2 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-dragon-fruit.jpg', 35, 1, 8, 'user.natthawut@gmail.com', 15, '2024-07-01', '2024-07-01'),
(58, 'ถั่วเขียว 500 กรัม', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-green-beans.jpg', 35, 1, 9, 'user.natthawut@gmail.com', 15, '2024-07-01', '2024-07-01'),
(59, 'กะหล่ำปี 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-cabbage.png', 35, 1, 4, 'user.natthawut@gmail.com', 15, '2024-07-01', '2024-07-01'),
(60, 'ถั่วดำ 500 กรัม', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-black_beans.jpg', 30, 1, 3, 'user.natthawut@gmail.com', 15, '2024-07-01', '2024-07-01'),
(61, 'กล้วย 5 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-banana.jpg', 48, 1, 2, 'user.natthawut@gmail.com', 16, '2024-07-02', '2024-07-02'),
(62, 'ถั่วดำ 500 กรัม', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-black_beans.jpg', 30, 1, 3, 'user.natthawut@gmail.com', 16, '2024-07-02', '2024-07-02'),
(63, 'ถั่วดำ 500 กรัม', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-black_beans.jpg', 30, 1, 3, 'user.natthawut@gmail.com', 17, '2024-07-02', '2024-07-02'),
(64, 'กะหล่ำปี 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-cabbage.png', 35, 1, 4, 'user.natthawut@gmail.com', 17, '2024-07-02', '2024-07-02'),
(65, 'กล้วย 5 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-banana.jpg', 48, 1, 2, 'user.natthawut@gmail.com', 18, '2024-07-02', '2024-07-02'),
(66, 'กล้วย 5 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-banana.jpg', 48, 1, 2, 'user.natthawut@gmail.com', 19, '2024-07-02', '2024-07-02'),
(67, 'กล้วย 5 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-banana.jpg', 48, 1, 2, 'user.natthawut@gmail.com', 20, '2024-07-02', '2024-07-02'),
(68, 'กล้วย 5 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-banana.jpg', 48, 1, 2, 'user.natthawut@gmail.com', 21, '2024-07-02', '2024-07-02'),
(69, 'ถั่วดำ 500 กรัม', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-black_beans.jpg', 30, 1, 3, 'user.natthawut@gmail.com', 21, '2024-07-02', '2024-07-02'),
(70, 'กะหล่ำปี 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-cabbage.png', 35, 1, 4, 'user.natthawut@gmail.com', 22, '2024-07-02', '2024-07-02'),
(71, 'กะหล่ำปี 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-cabbage.png', 35, 1, 4, 'user.natthawut@gmail.com', 23, '2024-07-02', '2024-07-02'),
(72, 'ทับทิบ 1 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Fri Jun 14 2024-Pomegranate.jpg', 35, 1, 1, 'user.natthawut@gmail.com', 24, '2024-09-08', '2024-09-08'),
(73, 'กล้วย 5 กิโลกรัม', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-banana.jpg', 48, 1, 2, 'user.natthawut@gmail.com', 24, '2024-09-08', '2024-09-08'),
(74, 'ถั่วดำ 500 กรัม', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-black_beans.jpg', 30, 1, 3, 'user.natthawut@gmail.com', 24, '2024-09-08', '2024-09-08'),
(75, 'ถั่วดำ 500 กรัม', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-black_beans.jpg', 30, 1, 3, 'user.natthawut@gmail.com', 25, '2024-09-08', '2024-09-08'),
(76, 'กะหล่ำปี 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-cabbage.png', 35, 1, 4, 'user.natthawut@gmail.com', 25, '2024-09-08', '2024-09-08'),
(77, 'แครอท 1 กิโลกรัม', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-carrot.png', 30, 1, 5, 'user.natthawut@gmail.com', 25, '2024-09-08', '2024-09-08');

-- --------------------------------------------------------

--
-- Table structure for table `produsts`
--

CREATE TABLE `produsts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(32,2) DEFAULT NULL,
  `categories` varchar(255) DEFAULT NULL,
  `imgURL` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `rating` int(11) NOT NULL DEFAULT '0',
  `sold` int(11) NOT NULL DEFAULT '0',
  `status` int(11) NOT NULL DEFAULT '1',
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `produsts`
--

INSERT INTO `produsts` (`id`, `name`, `price`, `categories`, `imgURL`, `description`, `quantity`, `rating`, `sold`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'ทับทิบ 1 กิโลกรัม', '35.00', 'พืชสวน', 'Wed Jun 26 2024-Fri Jun 14 2024-Pomegranate.jpg', 'หวานอร่อยจากธรรมชาติ', 38, 0, 7, 3, '2024-06-26', '2024-09-08'),
(2, 'กล้วย 5 กิโลกรัม', '48.00', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-banana.jpg', 'หวานอร่อย', 22, 0, 12, 3, '2024-06-26', '2024-09-08'),
(3, 'ถั่วดำ 500 กรัม', '30.00', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-black_beans.jpg', 'จากธรรมชาติ', 25, 0, 10, 3, '2024-06-26', '2024-09-08'),
(4, 'กะหล่ำปี 1 กิโลกรัม', '35.00', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-cabbage.png', 'หัวใหญ่จากธรรมชาติ', 43, 0, 7, 3, '2024-06-26', '2024-09-08'),
(5, 'แครอท 1 กิโลกรัม', '30.00', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-carrot.png', 'ไร้พิษตกค้าง', 6, 0, 5, 2, '2024-06-26', '2024-09-08'),
(6, 'ผักกวาดขาว 1 กิโลกรัม', '35.00', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-Chinese-Cabbage.jpg', 'อร่อยหัวใหญ่', 6, 0, 3, 2, '2024-06-26', '2024-07-01'),
(7, 'แตงกวา 1 กิโลกรัม', '40.00', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-cucumber.jpg', 'อร่อย', 28, 0, 4, 3, '2024-06-26', '2024-07-01'),
(8, 'แก้วมังกร 2 กิโลกรัม', '35.00', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-dragon-fruit.jpg', 'อร่อย', 40, 0, 5, 3, '2024-06-26', '2024-07-01'),
(9, 'ถั่วเขียว 500 กรัม', '35.00', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-green-beans.jpg', 'ไร้สารพิษตกค้าง', 3, 0, 3, 2, '2024-06-26', '2024-07-01'),
(10, 'ลิ้นจี่ 1 กิโลกรัม', '30.00', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-lychee.jpg', 'หวานอร่อย', 31, 0, 3, 3, '2024-06-26', '2024-07-01'),
(11, 'มะม่วง 1 กิโลกรัม', '35.00', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-mango.jpg', 'หวานอร่อย', 38, 0, 2, 3, '2024-06-26', '2024-07-01'),
(12, 'ลูกเดือย 1 กิโลกรัม', '40.00', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-millet.png', 'หวานฉ่ำ', 31, 0, 3, 3, '2024-06-26', '2024-07-01'),
(13, 'สับปรด 3 กิโลกรัม', '55.00', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-pineapple.jpg', 'อร่อยหวาน', 42, 0, 2, 3, '2024-06-26', '2024-07-01'),
(14, 'ส้มโอ 3 กิโลกรัม', '50.00', 'พืชสวน', 'Wed Jun 26 2024-Thu Jun 06 2024-pomelo.jpg', 'หวานฉ่ำ', 33, 0, 2, 3, '2024-06-26', '2024-07-01'),
(15, 'งาดำ 500 กรัม', '30.00', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-poppy.jpg', 'ไร้สารพิษ', 6, 0, 2, 2, '2024-06-26', '2024-07-01'),
(16, 'หัวไชเท้า 1 กิโลกรัม', '35.00', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-radish.jpg', NULL, 32, 0, 1, 3, '2024-06-26', '2024-07-01'),
(17, 'ถั่วแดง 500 กรัม', '35.00', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-red_beans.png', 'ธรรมชาติ 100%', 43, 0, 1, 3, '2024-06-26', '2024-07-01'),
(18, 'มะเขือเทศ 1 กิโลกรัม', '40.00', 'พืชผัก', 'Wed Jun 26 2024-Thu Jun 06 2024-tometo.jpg', 'ธรรมชาติของแท้', 4, 0, 2, 2, '2024-06-26', '2024-07-01'),
(19, 'ถั่วขาว 500 กรัม', '34.00', 'ธัญพืช', 'Wed Jun 26 2024-Thu Jun 06 2024-white_kidney_beans.jpg', 'ไร้สารพิษ', 4, 0, 1, 2, '2024-06-26', '2024-07-01'),
(20, 'แตงโม 3 กิโลกรัม', '40.00', 'พืชสวน', 'Wed Jun 26 2024-Fri Jun 14 2024-watermelon.png', 'หวานฉ่ำ', 33, 0, 2, 3, '2024-06-26', '2024-07-01');

-- --------------------------------------------------------

--
-- Table structure for table `shipping_addresses`
--

CREATE TABLE `shipping_addresses` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `county` varchar(255) DEFAULT NULL,
  `states` varchar(255) DEFAULT NULL,
  `tambon` varchar(255) DEFAULT NULL,
  `zipCode` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shipping_addresses`
--

INSERT INTO `shipping_addresses` (`id`, `first_name`, `last_name`, `street`, `county`, `states`, `tambon`, `zipCode`, `email`, `phone`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'ณัฐวุฒิ', 'จำปาแสง', '234 กำเนิดเพรช', 'เลย', 'เมืองเลย', 'เมือง', 42000, 'user.natthawut@gmail.com', '0615059483', 1, '2024-06-26', '2024-06-26'),
(2, 'natthawut', 'jampasaeng', '28/2 เลย', 'เลย', 'เมืองเลย', 'เมือง', 42000, 'example@gmail.com', '0615059483', 1, '2024-06-27', '2024-06-27'),
(3, 'firstName', 'lastName', '32/4 กำเนิดเพรช', 'เลย', 'เมืองเลย', 'เมือง', 42000, 'example@gmail.com', '0989877654', 0, '2024-06-29', '2024-06-29');

-- --------------------------------------------------------

--
-- Table structure for table `trnsactions`
--

CREATE TABLE `trnsactions` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userinfos`
--

CREATE TABLE `userinfos` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `accept` int(11) DEFAULT NULL,
  `imgURL` varchar(255) DEFAULT NULL,
  `gmail` int(11) NOT NULL DEFAULT '0',
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userinfos`
--

INSERT INTO `userinfos` (`id`, `first_name`, `last_name`, `email`, `password`, `accept`, `imgURL`, `gmail`, `createdAt`, `updatedAt`) VALUES
(1, 'User', 'Natthawut', 'user.natthawut@gmail.com', '$2b$10$cHUr2AXaV5TS3aO35hdjDeJh/YKCxAeUvON/5dgYWtwoQOSLt20xO', 1, 'profile.jpg', 1, '2024-06-26', '2024-06-26'),
(2, 'natthawut', 'jampasaeng', 'example@gmail.com', '$2b$10$u1boMtl6D.qiRZURd7D02uWiLL.ROL5bjiyEjCf5.yP7QShmMxYHe', 1, 'Thu Jun 27 2024-1617373404461.jpg', 0, '2024-06-27', '2024-06-27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `category_name` (`category_name`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `reference` (`reference`),
  ADD UNIQUE KEY `tracking_id` (`tracking_id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `produsts`
--
ALTER TABLE `produsts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shipping_addresses`
--
ALTER TABLE `shipping_addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trnsactions`
--
ALTER TABLE `trnsactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userinfos`
--
ALTER TABLE `userinfos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `produsts`
--
ALTER TABLE `produsts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `shipping_addresses`
--
ALTER TABLE `shipping_addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `trnsactions`
--
ALTER TABLE `trnsactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userinfos`
--
ALTER TABLE `userinfos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
