-- CreateTable
CREATE TABLE "Configuration" (
    "id" TEXT NOT NULL,
    "m_gallery" BOOLEAN NOT NULL DEFAULT true,
    "m_streamflix" BOOLEAN NOT NULL DEFAULT false,
    "m_naughtyverse" BOOLEAN NOT NULL DEFAULT false,
    "m_directfans" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "Configuration_id_key" ON "Configuration"("id");
