import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at center, #1b1308 0%, #06080c 100%)",
          borderRadius: "16px",
          border: "2px solid rgba(245, 158, 11, 0.6)",
          position: "relative",
          boxShadow: "0 0 20px rgba(245, 158, 11, 0.4)",
        }}
      >
        {/* Golden Om / Sacred Trishul Icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "38px",
            color: "#fbbf24",
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(251, 191, 36, 0.8)",
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
