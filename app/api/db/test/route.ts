import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET() {
  try {
    const supabase = createAdminClient();

    // Verify connectivity by running a basic health check or query
    const { data: testData, error: testError } = await supabase
      .from("profiles")
      .select("count", { count: "exact", head: true });

    if (testError && testError.code === "42P01") {
      // Table doesn't exist yet - let's inform and guide
      return NextResponse.json({
        status: "tables_missing",
        message: "Supabase connected successfully, tables need initial schema.",
        error: testError.message,
      });
    }

    return NextResponse.json({
      status: "connected",
      message: "Supabase connection is active and healthy.",
      data: testData,
    });
  } catch (error: any) {
    return NextResponse.json(
      { status: "error", message: error?.message || "Failed to connect to Supabase" },
      { status: 500 }
    );
  }
}
