const Contact = () => {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <div className="max-w-md">
        <p className="text-lg text-muted-foreground mb-8">
          Get in touch with us using the information below.
        </p>
        <div className="space-y-4">
          <div className="flex flex-col space-y-1">
            <span className="font-medium">Email</span>
            <span className="text-muted-foreground">contact@example.com</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="font-medium">Address</span>
            <span className="text-muted-foreground">
              123 Main Street, City, Country
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;