export interface Template {
  url: string;
  image: string;

};
const one: Template = {
  url: "/work/1",
  image: "/wallpaper1.png",

};const two: Template = {
  url: "/work/1",
  image: "/wallpaper2.png",

};
 const three: Template = {
  url: "/work/1",
  image: "/wallpaper3.png",

};

export const byName = {
  one,
  two,
  three,

};
export const work = Object.values(byName);
