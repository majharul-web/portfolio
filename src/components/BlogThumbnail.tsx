"use client";

import { useState } from "react";
import Image from "next/image";
import type { BlogPost } from "@/data/content";

type BlogThumbnailProps = {
  post: BlogPost;
  /** Show the post title as overlay text when falling back to the
   * gradient (used on the larger /blog cards). The compact homepage
   * preview passes false since there's no room for overlay text. */
  showTitleOverlay?: boolean;
  className?: string;
  sizes: string;
};

/**
 * Renders a post's thumbnail image, falling back to its gradient (with
 * optional overlaid title) if the image fails to load — e.g. LinkedIn's
 * CDN signs media URLs with an expiry, so those eventually 404 even
 * though the post itself is still live.
 */
export function BlogThumbnail({
  post,
  showTitleOverlay = false,
  className = "",
  sizes,
}: BlogThumbnailProps) {
  const [failed, setFailed] = useState(false);
  const showImage = post.thumbnail && !failed;

  return (
    <span
      className={`relative flex overflow-hidden ${className}`}
      style={
        !showImage && post.thumbnailGradient
          ? {
              background: `linear-gradient(135deg, ${post.thumbnailGradient[0]}, ${post.thumbnailGradient[1]})`,
            }
          : undefined
      }
    >
      {showImage ? (
        <Image
          src={post.thumbnail!}
          alt={post.title}
          fill
          className="object-cover"
          sizes={sizes}
          onError={() => setFailed(true)}
        />
      ) : (
        showTitleOverlay && (
          <span className="font-display text-xl font-semibold leading-tight text-canvas drop-shadow-sm">
            {post.title}
          </span>
        )
      )}
    </span>
  );
}
