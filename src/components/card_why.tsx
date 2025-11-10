export interface CardWhyProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function CardWhy({
  title,
  description,
  icon,
}: CardWhyProps) {
  return (
    <div className="space-y-2">
      {icon && <div>{icon}</div>}
      <h4 className="text-zinc-800">{title}</h4>
      <p>{description}</p>
    </div>
  );
}
