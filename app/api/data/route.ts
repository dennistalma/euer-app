import { NextResponse } from 'next/server'
import { readDataAsync } from '@/lib/storage'

export async function GET() {
  const data = await readDataAsync()
  return NextResponse.json(data)
}
