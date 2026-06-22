import { readFile } from "node:fs/promises";
import path from "node:path";

const RESUME_FILE = "Dikshant_Athawale_Resume_FullStack.pdf";
const DOWNLOAD_NAME = "Dikshant_Athawale_Resume.pdf";
const resumePath = path.join(process.cwd(), RESUME_FILE);
let resumePromise: Promise<Buffer> | null = null;

export const runtime = "nodejs";

export async function GET() {
  try {
    resumePromise ??= readFile(resumePath);
    const resume = await resumePromise;

    if (resume.byteLength === 0) {
      throw new Error("Resume file is empty");
    }

    return new Response(new Uint8Array(resume), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${DOWNLOAD_NAME}"`,
        "Content-Length": String(resume.byteLength),
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    resumePromise = null;
    return Response.json(
      {
        error:
          "The resume is temporarily unavailable. Please try again later or use the contact section.",
      },
      {
        status: 404,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }
}
