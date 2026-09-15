import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at center, #1b1308 0%, #06080c 100%)",
          borderRadius: "40px",
          border: "4px solid rgba(245, 158, 11, 0.7)",
        }}
      >
        <div
          style={{
            fontSize: "100px",
            color: "#fbbf24",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textShadow: "0 0 25px rgba(251, 191, 36, 0.9)",
          }}
        >
          🕉
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
