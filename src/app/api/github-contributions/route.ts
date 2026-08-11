import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const res = await fetch("https://github.com/users/Rohitkhb7/contributions", {
      cache: "no-store",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `GitHub endpoint returned status ${res.status}` },
        { status: res.status }
      );
    }

    const html = await res.text();

    const days: Array<{ date: string; level: number }> = [];
    const cellRegex = /<td[^>]+data-date="([^"]+)"[^>]*data-level="([^"]+)"/g;
    let match;

    while ((match = cellRegex.exec(html)) !== null) {
      days.push({
        date: match[1],
        level: parseInt(match[2], 10) || 0,
      });
    }

    const totalMatch = html.match(/([\d,]+)\s+contributions\s+in the last year/i);
    const totalCount = totalMatch
      ? parseInt(totalMatch[1].replace(/,/g, ""), 10)
      : days.filter((d) => d.level > 0).length;

    return NextResponse.json(
      {
        totalCount,
        days,
      },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to fetch contributions" },
      { status: 500 }
    );
  }
}
