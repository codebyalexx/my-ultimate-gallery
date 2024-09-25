import { getModelMedia } from "@/server/queries/dfans_models.query";
import fs from "fs";
import mime from "mime";
import { NextRequest } from "next/server";

const streamToReadableStream = (
  readStream: fs.ReadStream
): ReadableStream<Uint8Array> => {
  return new ReadableStream({
    start(controller) {
      readStream.on("data", (chunk) => {
        if (Buffer.isBuffer(chunk)) {
          controller.enqueue(new Uint8Array(chunk)); // Convert Buffer to Uint8Array
        } else {
          controller.enqueue(new Uint8Array(Buffer.from(chunk)));
        }
      });
      readStream.on("end", () => controller.close());
      readStream.on("error", (err) => controller.error(err));
    },
  });
};

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const mediaId = params.id;

  if (!mediaId)
    return new Response(
      JSON.stringify({
        success: false,
        error: "Bad request",
      })
    );

  const media = await getModelMedia(mediaId);
  if (!media) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Not found",
      })
    );
  }

  const filepath = `./storage/directfans/${media.filename}`;

  const mimeType = mime.getType(filepath);
  const headers = new Headers({
    "Content-Type": mimeType || "image/jpeg",
    "Cache-Control": "public, max-age=31536000",
  });

  const readstream = fs.createReadStream(filepath);
  return new Response(streamToReadableStream(readstream), { headers });
}
