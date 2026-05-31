import { NextResponse } from "next/server"

export function unauthorizedResponse() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
}

export function forbiddenResponse() {
  return NextResponse.json({ error: "Forbidden" }, { status: 403 })
}

export function notFoundResponse() {
  return NextResponse.json({ error: "Not found" }, { status: 404 })
}

export function badRequestResponse(message: string) {
  return NextResponse.json({ error: message }, { status: 400 })
}
