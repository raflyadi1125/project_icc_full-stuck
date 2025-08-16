/*
  Warnings:

  - Added the required column `isActive` to the `client_tb` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client_tb` ADD COLUMN `isActive` BOOLEAN NOT NULL;
