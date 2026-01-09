-- CreateTable
CREATE TABLE "Products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "typeProductId" INTEGER NOT NULL,
    CONSTRAINT "Products_typeProductId_fkey" FOREIGN KEY ("typeProductId") REFERENCES "TypeProduct" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProductLine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "price" DECIMAL NOT NULL,
    "ExpiryDate" DATETIME NOT NULL,
    CONSTRAINT "ProductLine_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TypeProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL
);
