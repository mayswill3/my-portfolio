'use client';

import { Printer } from 'lucide-react';

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-gray-700"
    >
      <Printer size={16} />
      Print / Save as PDF
    </button>
  );
}
