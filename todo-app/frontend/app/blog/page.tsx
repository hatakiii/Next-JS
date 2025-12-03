"use client";

import { Articles } from "./Articles";

export default function Page() {
  return (
    <div className="flex">
      <Articles />
      <Articles />
      <Articles />
    </div>
  );
}
