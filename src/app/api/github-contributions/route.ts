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
        { error: `GitHub endpoint status ${res.status}` },
        { status: res.status }
      );
    }

    const html = await res.text();

    // Extract table and count from GitHub's live official HTML
    const tableMatch = html.match(/<table[^>]*ContributionCalendar-grid[^>]*>[\s\S]*?<\/table>/i);
    const countMatch = html.match(/([\d,]+)\s+contributions\s+in the last year/i);
    const totalCount = countMatch ? parseInt(countMatch[1].replace(/,/g, ""), 10) : 33;

    if (tableMatch) {
      let cleanTable = tableMatch[0];

      return NextResponse.json(
        {
          tableHtml: cleanTable,
          totalCount,
        },
        {
          headers: {
            "Cache-Control": "no-store, no-cache, must-revalidate",
          },
        }
      );
    }

    return NextResponse.json({ error: "Could not parse table" }, { status: 500 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
