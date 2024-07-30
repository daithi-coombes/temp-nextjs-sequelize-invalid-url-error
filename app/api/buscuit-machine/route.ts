import { NextResponse } from "next/server"
import db from "../../../models"

const FIXTURE_PRODUCTS = [{ foo: "bar" }]

export async function GET() {
  /**
   * Comment out next line to pass, uncomment to throw error
   */
  await db.sequelize.sync()

  try {
    return NextResponse.json({ data: FIXTURE_PRODUCTS })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
