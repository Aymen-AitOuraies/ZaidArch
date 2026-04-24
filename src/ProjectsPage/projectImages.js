const projectImageModules = import.meta.glob("../../public/assets/images/ProjectsPage/**/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
  import: "default",
});

const firstImage = Object.values(projectImageModules)[0] || "";

export function getProjectImageSrc(fileName) {
  const entry = Object.entries(projectImageModules).find(([path]) => path.endsWith(`/${fileName}`));
  return entry ? entry[1] : firstImage;
}
