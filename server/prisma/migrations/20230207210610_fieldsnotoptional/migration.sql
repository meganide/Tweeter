/*
  Warnings:

  - Made the column `bio` on table `profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `backgroundImg` on table `profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `profilePic` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `profile` MODIFY `bio` VARCHAR(191) NOT NULL DEFAULT 'No bio assigned yet...',
    MODIFY `backgroundImg` VARCHAR(191) NOT NULL DEFAULT 'http://wallpaperset.com/w/full/9/3/b/224224.jpg';

-- AlterTable
ALTER TABLE `user` MODIFY `profilePic` VARCHAR(191) NOT NULL DEFAULT 'https://variety.com/wp-content/uploads/2022/11/Screen-Shot-2022-11-02-at-8.33.52-AM.png?w=681&h=383&crop=1';
