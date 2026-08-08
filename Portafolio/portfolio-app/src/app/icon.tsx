import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: "#111111",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#e5e5e5",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 1,
            fontFamily: "serif",
          }}
        >
          JP
        </span>
      </div>
    ),
    { ...size }
  );
}
