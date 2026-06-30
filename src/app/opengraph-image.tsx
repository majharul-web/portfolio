import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0e14",
          color: "#e6edf5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#c6ff3d",
            fontSize: 28,
            fontFamily: "monospace",
          }}
        >
          <span style={{ color: "#5a6577" }}>~/</span>
          hello, I&apos;m
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 40,
            color: "#c8d1de",
          }}
        >
          {profile.role}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 28,
            color: "#5a6577",
            fontFamily: "monospace",
          }}
        >
          {profile.location}
        </div>
      </div>
    ),
    { ...size }
  );
}
