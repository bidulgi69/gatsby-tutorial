declare module "*.module.css" {
  const content: { readonly [className: string]: string };
  export = content;
}