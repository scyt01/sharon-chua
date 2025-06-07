export const Footer = () => {
  return (
    <footer className="mb-2 flex flex-wrap justify-center items-center z-60">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Sharon Chua. All rights reserved.
      </p>
    </footer>
  );
};
