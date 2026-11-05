export type Role = 'Gerencia' | 'Tesorería' | 'Contabilidad' | 'Auditoría'
export type Restaurant = 'DF' | 'AJI' | 'BC LC' | 'BC VF' | 'CDP'
export type InvoiceStatus = 'Pendiente' | 'En proceso' | 'Pagada' | 'Vencida' | 'No vencida'
export type PaymentMethod = 'Efectivo' | 'Transferencia'

export interface Provider { id: string; code: string; name: string; bankAccount: string; invoiceCount: number; balance: number }
export interface Invoice { id: string; provider: string; restaurant: Restaurant; invoiceNumber: string; issueDate: string; creditDays: number; dueDate: string; overdueDays: number; amount: number; paid: number; balance: number; status: InvoiceStatus; paidDate?: string; type: 'Crédito' | 'Fijas' }
export interface Payment { id: string; invoiceNumber: string; provider: string; restaurant: Restaurant; amount: number; date: string; method: PaymentMethod; bank?: string; reference?: string; notes?: string }
export interface Loan { id: string; bank: string; loanNumber: string; holder: string; use: string; openingDate: string; initialBalance: number; interestRate: number; finalDate: string; paymentDay: number; monthlyPayment: number; currentBalance: number; history: { month: string; balance: number; status: 'Pagada' | 'Pendiente' }[] }
export interface AuditLog { id: string; date: string; user: string; role: Role; action: string; module: string; record: string; before: string; after: string }
export interface User { id: string; name: string; email: string; role: Role; active: boolean }