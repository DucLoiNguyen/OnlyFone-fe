import CategoryCard from '@/components/categorycard';

function CategoriesSection() {
  const categories = [
    { name: 'iPhone', icon: '🍎' },
    { name: 'Samsung', icon: '📲' },
    { name: 'Xiaomi', icon: '🔴' },
    { name: 'Google Pixel', icon: '🔍' },
    { name: 'OnePlus', icon: '⚡' },
    { name: 'Realme', icon: '💎' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-8">Duyệt theo thương hiệu</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            icon={category.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;