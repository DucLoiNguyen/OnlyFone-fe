import { Card, CardContent } from "@/components/ui/card";

function CategoryCard({ name, icon, onClick }) {
  return (
    <Card
      onClick={onClick}
      className="
        cursor-pointer select-none transition-all duration-300
        p-6 flex flex-col items-center justify-center gap-3

        /* Glass effect */
        bg-white/30 dark:bg-white/10
        border border-white/40 dark:border-white/20
        backdrop-blur-xl
        shadow-sm

        /* Hover */
        hover:bg-white/40 dark:hover:bg-white/20
        hover:shadow-md hover:border-primary/60
      "
    >
      <CardContent className="flex flex-col items-center p-0">
        <div className="text-4xl">{icon}</div>
        <p className="font-semibold text-gray-900 dark:text-gray-100">
          {name}
        </p>
      </CardContent>
    </Card>
  );
}

export default CategoryCard;
