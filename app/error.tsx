"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-white px-6 py-16 text-center">
      <h1 className="text-2xl font-medium text-[#111111]">Something went wrong</h1>
      <p className="max-w-md text-[16px] leading-6 text-[#808080]">
        This page could not be loaded. Please try again, or continue from the homepage.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-md bg-[#D70416] px-4 py-2 text-sm font-medium text-white"
        >
          Try again
        </button>
        <a href="/" className="rounded-md border border-[#E5E5E5] px-4 py-2 text-sm font-medium text-[#111111]">
          Go home
        </a>
      </div>
    </div>
  );
}
