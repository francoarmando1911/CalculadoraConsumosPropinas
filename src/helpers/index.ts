export function formatCurrency(quantity: number) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2 //siempre muestra dos decimales
    }).format(quantity);
}
