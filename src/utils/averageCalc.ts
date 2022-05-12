export default function averageCalc(total: number, count: number): string {
  return (total / count).toFixed(1).toString().replace('.', ',');
}
