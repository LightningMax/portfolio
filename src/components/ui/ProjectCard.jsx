export default function ProjectCard({ title, description, img }) {
  return (
    <article className="flex flex-col gap-2 mb-10">
      <div className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl">
        <img
          className="w-screen duration-700 ease-in-out group-hover:scale-105"
          src={img}
          width="800"
          height="600"
          alt=""
        />
      </div>
      <div className="flex space-x-2 mb-1">
        <p className="rounded-full bg-transparent font-general border border-secondary-600 flex justify-center items-center px-4 py-1 text-nier-50 text-body-4 2xl:text-3xl">
          {description}
        </p>
      </div>
        <h3 className="text-works-title 2xl:text-5xl font-general uppercase text-nier-50">
          {title}
        </h3>
    </article>
  );
}
