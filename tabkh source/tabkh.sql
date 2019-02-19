-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2017 at 10:42 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tabkh`
--

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

CREATE TABLE `ingredients` (
  `id_ingredient` int(11) NOT NULL,
  `id_recipe` int(11) DEFAULT NULL,
  `qyt` varchar(4) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ingredient` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `oorder` int(11) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `methods`
--

CREATE TABLE `methods` (
  `id_method` int(11) NOT NULL,
  `id_recipe` int(11) DEFAULT NULL,
  `method` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `oorder` int(11) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `id_recipe` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image01` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image02` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image03` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image04` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image05` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `preptime` tinyint(4) DEFAULT NULL,
  `cooktime` tinyint(4) DEFAULT NULL,
  `servings` tinyint(4) DEFAULT '1',
  `note` varchar(400) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datecreation` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `recipes_category`
--

CREATE TABLE `recipes_category` (
  `id_recipe` int(11) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbk_category`
--

CREATE TABLE `tbk_category` (
  `id_category` int(11) NOT NULL,
  `label` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `isCountry` tinyint(1) DEFAULT '0',
  `isActive` tinyint(1) DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id_ingredient`),
  ADD KEY `id_recipe` (`id_recipe`);

--
-- Indexes for table `methods`
--
ALTER TABLE `methods`
  ADD PRIMARY KEY (`id_method`),
  ADD KEY `id_recipe` (`id_recipe`);

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id_recipe`);

--
-- Indexes for table `recipes_category`
--
ALTER TABLE `recipes_category`
  ADD KEY `id_recipe` (`id_recipe`),
  ADD KEY `id_category` (`id_category`);

--
-- Indexes for table `tbk_category`
--
ALTER TABLE `tbk_category`
  ADD PRIMARY KEY (`id_category`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id_ingredient` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7739;
--
-- AUTO_INCREMENT for table `methods`
--
ALTER TABLE `methods`
  MODIFY `id_method` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5928;
--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id_recipe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=855;
--
-- AUTO_INCREMENT for table `tbk_category`
--
ALTER TABLE `tbk_category`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
