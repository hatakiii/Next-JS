"use client";

import useSWR from "swr";
import { fetcher } from "./fetcher";

export function Articles() {
  const { data: articles, isLoading } = useSWR(
    "/articles?username=k_a_9d392955e8b9d3444f963",
    fetcher
  );

  if (isLoading) return <div className="text-center py-12">Loading...</div>;

  return (
    <div className="m-8 max-w-2xl mx-auto">
      {articles.map((article: { id: string; title: string }) => (
        <div className="card p-4 border shadow mb-4" key={article.id}>
          {article.title}
        </div>
      ))}
    </div>
  );
}
