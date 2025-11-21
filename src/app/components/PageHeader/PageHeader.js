export default function PageHeader({ description, title }) {
  return (
    <div className="pt-20 lg:pt-32 text-center">
      <div className="container">
        <h1 className="text-2xl lg:text-6xl font-medium mb-2 text-gray-900 leading-[1.5]">
          {title}
        </h1>
        <p className="text-center lg:w-7/12 mx-auto">{description}</p>
      </div>
    </div>
  );
}
