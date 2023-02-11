type OnMapMenuContainerProps = {
  positionProps?: {
    left?: number;
    bottom?: number;
    right?: number;
    top?: number;
  };
  children: React.ReactNode;
};

const OnMapMenuContainer = ({
  positionProps,
  children,
}: OnMapMenuContainerProps) => (
  <div style={{ position: "absolute", zIndex: 1, ...positionProps }}>
    {children}
  </div>
);

export default OnMapMenuContainer;
