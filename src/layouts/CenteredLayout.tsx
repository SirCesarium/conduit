interface CenteredLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const CenteredLayout = ({
  children,
  className = "max-w-110",
}: CenteredLayoutProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-12 select-none">
      <div className={`w-full flex flex-col items-center ${className}`}>
        {children}
      </div>
    </div>
  );
};
