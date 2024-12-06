import { DatePickerDemo } from "@/components/DatePickerDemo";
const About = () => {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-6">About</h1>
      <div className="prose prose-gray max-w-none">
        <p className="text-lg text-muted-foreground">
          This is a modern React boilerplate that includes:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
          <li>React 19 with latest features</li>
          <li>React Router 7 for seamless navigation</li>
          <li>Tailwind CSS for beautiful, responsive designs</li>
          <li>TypeScript for better development experience</li>
          <li>Modern project structure</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-12 mb-6">Date Picker Demo</h2>
        <DatePickerDemo />
      </div>
    </div>
  );
};

export default About;