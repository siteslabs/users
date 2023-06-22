declare module "*.svg" {
  const content: string;

  export default content;
}

declare module "*.png" {
  const content: string;

  export default content;
}

declare module "*.jpg" {
  const content: string;

  export default content;
}

declare module "*.webp" {
  const content: string;

  export default content;
}

declare module "*.mp4";
declare module "*.webm";
declare module "*.scss";
declare module "*.svg" {
  const ReactComponent: React.JSXElementConstructor<any>;

  export { ReactComponent };
}