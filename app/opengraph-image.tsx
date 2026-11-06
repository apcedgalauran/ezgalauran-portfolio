import { ImageResponse } from "next/og";
import { profile, site } from "@/data/profile";

// Generated at build time into a static PNG used for link previews.
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0e0e0e",
          color: "#f5f5f3",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#8b8b8e" }}>
          {site.wordmark}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 600, letterSpacing: -2 }}>
            {profile.name}
          </div>
          <div style={{ marginTop: 20, fontSize: 36, color: "#a8a8a5" }}>
            {profile.title}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
