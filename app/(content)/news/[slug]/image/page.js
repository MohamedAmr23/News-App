import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const NewsDetailPage = ({ params }) => {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);
  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default NewsDetailPage;
