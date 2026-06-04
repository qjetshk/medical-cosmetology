interface InfoTableRow {
  label: string;
  value: React.ReactNode;
}

interface InfoTableProps {
  rows: InfoTableRow[];
  caption?: string;
}

export default function InfoTable({ rows, caption }: InfoTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        {caption && (
          <caption className="text-left text-ink-muted mb-2 pb-2">{caption}</caption>
        )}
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-line last:border-0">
              <th
                scope="row"
                className="py-3 pr-6 text-left font-medium text-ink-muted w-40 md:w-56 align-top"
              >
                {row.label}
              </th>
              <td className="py-3 text-ink align-top">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
