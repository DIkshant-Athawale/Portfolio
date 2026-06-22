"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, Download, LoaderCircle } from "lucide-react";
import { personal } from "@/data/personal";

type DownloadState = "idle" | "loading" | "success" | "error";

interface DownloadResumeButtonProps {
  children?: ReactNode;
  className?: string;
  onDownloadSuccess?: () => void;
}

const DEFAULT_ERROR =
  "The resume is temporarily unavailable. Please try again later.";

export default function DownloadResumeButton({
  children = "Download Resume",
  className = "",
  onDownloadSuccess,
}: DownloadResumeButtonProps) {
  const [state, setState] = useState<DownloadState>("idle");
  const [errorMessage, setErrorMessage] = useState(DEFAULT_ERROR);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const scheduleReset = () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setState("idle"), 3000);
  };

  const handleDownload = async () => {
    if (state === "loading") return;

    setState("loading");

    try {
      const response = await fetch(personal.resumeUrl, {
        method: "GET",
        cache: "force-cache",
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(payload?.error || DEFAULT_ERROR);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType?.includes("application/pdf")) {
        throw new Error(DEFAULT_ERROR);
      }

      const resumeBlob = await response.blob();
      if (resumeBlob.size === 0) {
        throw new Error(DEFAULT_ERROR);
      }

      const objectUrl = URL.createObjectURL(resumeBlob);
      const downloadLink = document.createElement("a");
      downloadLink.href = objectUrl;
      downloadLink.download = "Dikshant_Athawale_Resume.pdf";
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);

      setState("success");
      onDownloadSuccess?.();
      scheduleReset();
    } catch (error) {
      setErrorMessage(
        error instanceof Error && error.message ? error.message : DEFAULT_ERROR
      );
      setState("error");
      scheduleReset();
    }
  };

  const Icon =
    state === "loading" ? LoaderCircle : state === "success" ? Check : Download;

  return (
    <>
      <button
        type="button"
        onClick={handleDownload}
        disabled={state === "loading"}
        className={`group/download inline-flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] disabled:cursor-wait disabled:opacity-80 ${className}`}
        aria-label={
          state === "loading" ? "Preparing resume download" : "Download resume PDF"
        }
        aria-busy={state === "loading"}
      >
        <Icon
          size={18}
          aria-hidden="true"
          className={
            state === "loading"
              ? "animate-spin"
              : "transition-transform duration-200 group-hover/download:translate-y-0.5"
          }
        />
        <span>{state === "success" ? "Downloaded!" : children}</span>
      </button>

      {state === "error" && (
        <div
          role="alert"
          className="fixed left-1/2 bottom-[max(5rem,env(safe-area-inset-bottom))] z-[100] w-[min(92vw,28rem)] -translate-x-1/2 rounded-xl border border-red-400/20 bg-[#18121a]/95 px-4 py-3 text-center text-sm text-red-200 shadow-2xl backdrop-blur-xl"
        >
          {errorMessage}
        </div>
      )}
    </>
  );
}
