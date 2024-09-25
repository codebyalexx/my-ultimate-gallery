-- CreateTable
CREATE TABLE "dfans_model" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "bio" TEXT NOT NULL DEFAULT '',
    "avatarURL" TEXT NOT NULL,
    "bannerURL" TEXT NOT NULL DEFAULT '',
    "picturesCount" INTEGER NOT NULL DEFAULT 0,
    "videosCount" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "dfans_model_social" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    CONSTRAINT "dfans_model_social_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "dfans_model" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "dfans_model_media" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'image',
    "sizeBits" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modelId" TEXT NOT NULL,
    "extension" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "label" TEXT NOT NULL DEFAULT 'Unnamed',
    "description" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "dfans_model_media_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "dfans_model" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "dfans_model_id_key" ON "dfans_model"("id");

-- CreateIndex
CREATE UNIQUE INDEX "dfans_model_social_id_key" ON "dfans_model_social"("id");

-- CreateIndex
CREATE UNIQUE INDEX "dfans_model_media_id_key" ON "dfans_model_media"("id");
