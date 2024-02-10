-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 10, 2024 at 03:46 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zarandah_m_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
CREATE TABLE IF NOT EXISTS `media` (
  `id` int NOT NULL AUTO_INCREMENT,
  `project_id` int NOT NULL,
  `image_filename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `project_id`, `image_filename`) VALUES
(1, 1, 'kavorka-ss.jpg'),
(3, 2, 'renders5.jpg'),
(4, 3, 'quatro-brand.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `personal_info`
--

DROP TABLE IF EXISTS `personal_info`;
CREATE TABLE IF NOT EXISTS `personal_info` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TITLE` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `EMAIL` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PHONE` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `WEBSITE` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `LOCATION` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SUMMARY` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_info`
--

INSERT INTO `personal_info` (`ID`, `NAME`, `TITLE`, `EMAIL`, `PHONE`, `WEBSITE`, `LOCATION`, `SUMMARY`) VALUES
(1, 'Mohamed Zarandah', 'Welcome To My Portfolio Site', 'm_zarandah@fanshaweonline.ca', '(226) 503-6430', '', 'London ON, Canada', '');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
CREATE TABLE IF NOT EXISTS `projects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `notnot_id` int NOT NULL,
  `reviews` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `highlights` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `about` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `description`, `link`, `image_url`, `notnot_id`, `reviews`, `highlights`, `about`) VALUES
(1, 'PROJECT - KAVORKA', 'A makeup project introducing the brand with a twist of its Latin roots showcasing all its natural and traditional beauty.', '', 'kavorka-banner.png', 0, '\"Kavorka\'s products are a true reflection of elegance and quality. I love how they embrace Latin beauty traditions while offering modern choices. Highly recommended!\"\r\n\r\n- Maria, Makeup Enthusiast ', 'Indulge in our Signature Lipstick Collection inspired by vibrant Latin colors. Long-lasting formulas that glide on smoothly for a bold and beautiful look.\r\n\r\nSultry Eyeshadow Palette\r\n\r\nCreate captivating eye looks with our Sultry Eyeshadow Palette. A mix of rich, earthy tones to enhance your natural beauty.\r\n\r\nRadiance Foundation\r\n\r\nAchieve a radiant complexion with our Radiance Foundation. Lightweight formula that provides a natural and flawless finish.\r\n', 'Kavorka is a makeup brand that proudly showcases its Latin roots, celebrating natural and traditional beauty. Our products are crafted with care, blending modern elegance with the timeless charm of Latin beauty traditions.'),
(2, 'PROJECT - MHZ', 'An innovative earbuds website for MHZ. Bringing my personal vision to life.', '', 'mhz-banner.png', 0, '\"Simply put, these MHZ earbuds have elevated my music experience. Clear sound, comfortable fit – a game-changer for daily use!\"', 'Immersive Sound Experience: MHZ earbuds redefine audio excellence, delivering a truly immersive sound experience. Whether you\'re diving into your favorite beats or enjoying a podcast, the crisp highs and deep lows create a rich sonic landscape that enhances every listening moment. \r\n\r\n Sleek and Comfortable Design: The earbuds are not just about sound; they\'re a statement of style. With a sleek and ergonomic design, MHZ earbuds provide a comfortable and secure fit, ensuring they stay in place during your most active moments while adding a touch of modern sophistication. \r\n\r\n Intuitive Touch Controls: Enjoy seamless control at your fingertips. MHZ earbuds feature intuitive touch controls, allowing you to effortlessly manage playback, adjust volume, and answer calls with a simple touch. The convenience of these controls adds a layer of sophistication to your overall user experience.', 'Crafting an innovative earbuds website for MHZ has been a gratifying endeavor, allowing me to breathe life into my unique vision. From envisioning the user interface to implementing cutting-edge design elements, this project has been a canvas for my creativity and technical skills. The website stands as a testament to the fusion of my passion for technology and design, providing a platform to showcase MHZ\'s earbuds in a visually appealing and user-friendly manner. It\'s more than a website; it\'s the realization of my commitment to delivering an immersive and seamless online experience for users exploring the world of premium audio.'),
(3, 'PROJECT - QUATRO', 'A responsive website for the Quatro drinks brand. Changing an old juice brand to a modern beverage company with a twist.', '', 'quatro-banner.png', 0, '\"Quatro\'s beverage is a taste revolution! A burst of unique flavors that left me craving more. It\'s not just a drink; it\'s an experience. Quatro has redefined refreshment!\" - Emily M., Flavor Explorer', 'Diversification into Adult Beverages: Quatro has successfully transitioned from its roots as a kids\' juice company to a dynamic player in the adult beverage industry. This strategic move demonstrates their adaptability and responsiveness to changing consumer preferences.\r\n\r\nFocus on Seltzers: Quatro\'s core product lineup now centers around beverage seltzers. These effervescent and flavorful drinks cater to the discerning palate of adult consumers, offering a refreshing alternative in the competitive beverage market.\r\n\r\nContemporary Branding: The company\'s rebranding goes beyond just the products. Quatro has embraced a contemporary and sophisticated brand image, aligning with the aesthetics and preferences of their adult target audience. The new branding communicates a sense of style and maturity that resonates with today\'s consumers.', 'Quatro, a company with roots in delighting children with its vibrant and flavorful juices, has undergone a remarkable metamorphosis into a trailblazer in the adult beverage landscape. The brand\'s journey reflects a strategic pivot towards meeting the sophisticated tastes of grown-up consumers. From its origins as a cherished kids\' juice company, Quatro has redefined itself, placing a strong emphasis on crafting beverage seltzers that embody a perfect blend of innovation, quality, and maturity. With a contemporary rebranding that transcends mere aesthetics, Quatro has emerged as a symbol of elegance and taste in the adult beverage market. This evolution encapsulates not just a change in products but a visionary shift that positions Quatro as a dynamic force in the ever-evolving world of beverages.');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
CREATE TABLE IF NOT EXISTS `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `service_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `service_name`, `description`) VALUES
(1, '. Front-End Dev\r\n. Back-End Dev\r\n. UI/UX Design\r\n. Creative Development\r\n. 3D Modeling', 'these are my following skills/services i know how to work with.');

-- --------------------------------------------------------

--
-- Table structure for table `social_links`
--

DROP TABLE IF EXISTS `social_links`;
CREATE TABLE IF NOT EXISTS `social_links` (
  `id` int NOT NULL AUTO_INCREMENT,
  `platform` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `social_links`
--

INSERT INTO `social_links` (`id`, `platform`, `url`, `user_id`) VALUES
(1, 'instagram, twitter, linkedin', 'https://www.instagram.com/ ; https://twitter.com/?', 0);

-- --------------------------------------------------------

--
-- Table structure for table `toolbox`
--

DROP TABLE IF EXISTS `toolbox`;
CREATE TABLE IF NOT EXISTS `toolbox` (
  `id` int NOT NULL AUTO_INCREMENT,
  `toolbox_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `toolbox`
--

INSERT INTO `toolbox` (`id`, `toolbox_name`, `description`) VALUES
(1, 'HTML\r\nCSS\r\nSCSS\r\nJS\r\nMYSQL\r\nADOBE SUITE', '(\'HTML\', \'HyperText Markup Language\'),\r\n(\'CSS\', \'Cascading Style Sheets\'),\r\n(\'SCSS\', \'Sass (Syntactically Awesome Stylesheets)\'),\r\n(\'JS\', \'JavaScript\'),\r\n(\'MYSQL\', \'MySQL Database\'),\r\n(\'ADOBE SUITE\', \'Adobe Creative Suite\');');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
