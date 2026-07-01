export interface Transaction {
  id: string
  description: string
  amount: number
  type: 'income' | 'expense'
  category?: string
  date: string
  createdAt: string
  vendor?: string
  netAmount?: number
  vatAmount?: number
  vatRate?: number
  receiptId?: string
  locked?: boolean
}

export interface Receipt {
  id: string
  transactionId: string
  imageBase64: string
  mediaType: string
  extractedRaw: string
  createdAt: string
}

export interface AppData {
  transactions: Transaction[]
  receipts: Receipt[]
}
