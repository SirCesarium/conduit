export const Divider = (props: { className: string }) => (
  <div
    className={
      "h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent my-8 " +
      props.className
    }
  />
);
