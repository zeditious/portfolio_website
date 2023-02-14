export default function scrollIndicator() {
  return (
    <div>
      <div className="pt-8"></div>
      <div className="animate-bounce bg-stone-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full items-center justify-center content-end">
        <svg
          className="flex w-6 h-6 text-stone-500 items-end"
          fill="stone-800"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}
