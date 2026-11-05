import type { AuditLog, Invoice, Loan, Payment, Provider, User } from './types'

export const providers: Provider[] = [
  { id: '1', code: 'PRV-001', name: 'AEXPRESS', bankAccount: 'BAC •••• 1842', invoiceCount: 4, balance: 42800 },
  { id: '2', code: 'PRV-002', name: 'ALCALDÍA DE MANAGUA', bankAccount: 'LAFISE •••• 0921', invoiceCount: 3, balance: 18400 },
  { id: '3', code: 'PRV-003', name: 'DISTRIBUIDORA DEL PACÍFICO', bankAccount: 'BAC •••• 6640', invoiceCount: 3, balance: 61320 },
  { id: '4', code: 'PRV-004', name: 'EL GALLO MÁS GALLO', bankAccount: 'Ficohsa •••• 3309', invoiceCount: 2, balance: 9500 },
  { id: '5', code: 'PRV-005', name: 'SERVICIOS LIMPIOS S.A.', bankAccount: 'LAFISE •••• 7418', invoiceCount: 2, balance: 12300 },
  { id: '6', code: 'PRV-006', name: 'INVERSIONES LA COLONIA', bankAccount: 'BAC •••• 1150', invoiceCount: 2, balance: 24700 },
  { id: '7', code: 'PRV-007', name: 'NICARAGUA BEBIDAS', bankAccount: 'LAFISE •••• 8832', invoiceCount: 2, balance: 31800 },
  { id: '8', code: 'PRV-008', name: 'PAPELERÍA MODERNA', bankAccount: 'BAC •••• 4301', invoiceCount: 2, balance: 5200 },
]

export const invoices: Invoice[] = [
  { id:'f1', provider:'AEXPRESS', restaurant:'DF', invoiceNumber:'FAC-10482', issueDate:'28/10/2026', creditDays:15, dueDate:'12/11/2026', overdueDays:0, amount:27320, paid:0, balance:27320, status:'No vencida', type:'Crédito' },
  { id:'f2', provider:'ALCALDÍA DE MANAGUA', restaurant:'AJI', invoiceNumber:'ALC-8831', issueDate:'01/10/2026', creditDays:15, dueDate:'16/10/2026', overdueDays:19, amount:18400, paid:0, balance:18400, status:'Vencida', type:'Fijas' },
  { id:'f3', provider:'DISTRIBUIDORA DEL PACÍFICO', restaurant:'BC LC', invoiceNumber:'DP-77820', issueDate:'02/11/2026', creditDays:30, dueDate:'02/12/2026', overdueDays:0, amount:61320, paid:30000, balance:31320, status:'En proceso', type:'Crédito' },
  { id:'f4', provider:'EL GALLO MÁS GALLO', restaurant:'BC VF', invoiceNumber:'EG-4421', issueDate:'15/10/2026', creditDays:15, dueDate:'30/10/2026', overdueDays:5, amount:9500, paid:0, balance:9500, status:'Vencida', type:'Crédito' },
  { id:'f5', provider:'SERVICIOS LIMPIOS S.A.', restaurant:'CDP', invoiceNumber:'SL-3019', issueDate:'31/10/2026', creditDays:15, dueDate:'15/11/2026', overdueDays:0, amount:12300, paid:0, balance:12300, status:'No vencida', type:'Fijas' },
  { id:'f6', provider:'INVERSIONES LA COLONIA', restaurant:'DF', invoiceNumber:'LC-1802', issueDate:'04/11/2026', creditDays:30, dueDate:'04/12/2026', overdueDays:0, amount:24700, paid:0, balance:24700, status:'Pendiente', type:'Crédito' },
  { id:'f7', provider:'NICARAGUA BEBIDAS', restaurant:'AJI', invoiceNumber:'NB-9088', issueDate:'20/10/2026', creditDays:15, dueDate:'04/11/2026', overdueDays:0, amount:31800, paid:31800, balance:0, status:'Pagada', paidDate:'04/11/2026', type:'Crédito' },
  { id:'f8', provider:'PAPELERÍA MODERNA', restaurant:'BC LC', invoiceNumber:'PM-5510', issueDate:'27/10/2026', creditDays:15, dueDate:'11/11/2026', overdueDays:0, amount:5200, paid:0, balance:5200, status:'No vencida', type:'Fijas' },
  { id:'f9', provider:'AEXPRESS', restaurant:'BC VF', invoiceNumber:'FAC-10455', issueDate:'12/10/2026', creditDays:30, dueDate:'11/11/2026', overdueDays:0, amount:15480, paid:0, balance:15480, status:'No vencida', type:'Crédito' },
  { id:'f10', provider:'DISTRIBUIDORA DEL PACÍFICO', restaurant:'CDP', invoiceNumber:'DP-77604', issueDate:'18/10/2026', creditDays:15, dueDate:'02/11/2026', overdueDays:2, amount:30200, paid:0, balance:30200, status:'Vencida', type:'Crédito' },
]

export const payments: Payment[] = [
  { id:'p1', invoiceNumber:'DP-77820', provider:'DISTRIBUIDORA DEL PACÍFICO', restaurant:'BC LC', amount:30000, date:'03/11/2026', method:'Transferencia', bank:'BAC', reference:'TRX-884210' },
  { id:'p2', invoiceNumber:'NB-9088', provider:'NICARAGUA BEBIDAS', restaurant:'AJI', amount:31800, date:'04/11/2026', method:'Transferencia', bank:'LAFISE', reference:'TRX-884301' },
  { id:'p3', invoiceNumber:'FAC-10420', provider:'AEXPRESS', restaurant:'DF', amount:21000, date:'01/11/2026', method:'Efectivo', notes:'Pago parcial autorizado' },
]

export const loans: Loan[] = [
  { id:'l1', bank:'BAC', loanNumber:'BAC-2024-091', holder:'Grupo Restaurantes S.A.', use:'Capital de trabajo', openingDate:'15/01/2024', initialBalance:180000, interestRate:9.5, finalDate:'15/01/2028', paymentDay:15, monthlyPayment:4680, currentBalance:112450, history:[{month:'Jun 26',balance:132400,status:'Pagada'},{month:'Jul 26',balance:128300,status:'Pagada'},{month:'Ago 26',balance:124220,status:'Pagada'},{month:'Sep 26',balance:120180,status:'Pagada'},{month:'Oct 26',balance:116320,status:'Pagada'},{month:'Nov 26',balance:112450,status:'Pendiente'}] },
  { id:'l2', bank:'LAFISE Panamá', loanNumber:'LP-2025-034', holder:'Grupo Restaurantes S.A.', use:'Remodelación DF', openingDate:'10/06/2025', initialBalance:95000, interestRate:8.75, finalDate:'10/06/2029', paymentDay:10, monthlyPayment:2450, currentBalance:78120, history:[{month:'Jun 26',balance:85320,status:'Pagada'},{month:'Jul 26',balance:83900,status:'Pagada'},{month:'Ago 26',balance:82480,status:'Pagada'},{month:'Sep 26',balance:81040,status:'Pagada'},{month:'Oct 26',balance:79580,status:'Pagada'},{month:'Nov 26',balance:78120,status:'Pendiente'}] },
  { id:'l3', bank:'LAFISE Nicaragua', loanNumber:'LN-2025-118', holder:'Grupo Restaurantes S.A.', use:'Equipamiento', openingDate:'22/08/2025', initialBalance:72000, interestRate:10.25, finalDate:'22/08/2028', paymentDay:22, monthlyPayment:2220, currentBalance:63280, history:[{month:'Jun 26',balance:68320,status:'Pagada'},{month:'Jul 26',balance:66640,status:'Pagada'},{month:'Ago 26',balance:65000,status:'Pagada'},{month:'Sep 26',balance:63380,status:'Pagada'},{month:'Oct 26',balance:63280,status:'Pagada'},{month:'Nov 26',balance:63280,status:'Pendiente'}] },
  { id:'l4', bank:'Ficohsa', loanNumber:'FIC-2026-009', holder:'Grupo Restaurantes S.A.', use:'Capital de trabajo', openingDate:'05/03/2026', initialBalance:45000, interestRate:11, finalDate:'05/03/2029', paymentDay:5, monthlyPayment:1380, currentBalance:42100, history:[{month:'Jun 26',balance:45000,status:'Pagada'},{month:'Jul 26',balance:44360,status:'Pagada'},{month:'Ago 26',balance:43720,status:'Pagada'},{month:'Sep 26',balance:43080,status:'Pagada'},{month:'Oct 26',balance:42440,status:'Pagada'},{month:'Nov 26',balance:42100,status:'Pendiente'}] },
]

export const auditLogs: AuditLog[] = Array.from({length:15},(_,i)=>({id:String(i+1),date:`0${Math.max(1,4-i%4)}/11/2026  ${String(9+i).padStart(2,'0')}:${String(12+i).padStart(2,'0')}`,user:['María López','Carlos Ruiz','Ana Martínez'][i%3],role:(['Gerencia','Tesorería','Contabilidad'][i%3]) as AuditLog['role'],action:['Registró pago','Creó factura','Actualizó proveedor','Marcó como pagada'][i%4],module:['Pagos','Facturas','Proveedores'][i%3],record:['DP-77820','FAC-10482','PRV-00'+(i%8+1)][i%3],before:i%2?'Pendiente':'—',after:i%2?'Pagada':'Creado'}))
export const users: User[] = [{id:'u1',name:'María López',email:'maria@grupo.com',role:'Gerencia',active:true},{id:'u2',name:'Carlos Ruiz',email:'carlos@grupo.com',role:'Tesorería',active:true},{id:'u3',name:'Ana Martínez',email:'ana@grupo.com',role:'Contabilidad',active:true},{id:'u4',name:'Luis Pérez',email:'luis@grupo.com',role:'Auditoría',active:false}]