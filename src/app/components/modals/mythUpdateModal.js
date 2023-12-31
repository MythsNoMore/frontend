/*

Todo: List of things to do
- [ ] add form to a different component. 
- [ ] add notification for success and error

*/

import { useForm } from "react-hook-form";
import { slugify } from "../../helpers/slugify";

const MythUpdateModal = ({ myth, onClose, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const slug = slugify(myth.title);

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center text-black bg-black bg-opacity-40">
      <div className="w-1/2 p-6 bg-white border border-gray-300 rounded-lg">
        <span
          className="absolute text-xl font-bold text-white cursor-pointer top-10 right-10"
          onClick={onClose}
        >
          X
        </span>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label className="block font-semibold text-black">Title</label>
          <input
            {...register("title")}
            defaultValue={myth.title}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />

          <label className="block font-semibold text-black">Slug</label>
          <input
            {...register("slug")}
            defaultValue={slug}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />

          <label className="block font-semibold text-black">Description</label>
          <input
            {...register("description")}
            defaultValue={myth.description}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />

          <label className="block font-semibold text-black">Topic</label>
          <input
            {...register("topic")}
            defaultValue={myth.topic}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />

          <label className="block font-semibold text-black">Image URL</label>
          <input
            {...register("imageUrl")}
            defaultValue={myth.imageUrl}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />

          <label className="block font-semibold text-black">Content</label>
          <textarea
            {...register("content")}
            defaultValue={myth.content}
            rows="4"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />

          <label className="block font-semibold text-black">Fact</label>
          <input
            {...register("fact")}
            defaultValue={myth.fact}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
          <label className="block font-semibold text-black">Likes</label>
          <input
            {...register("likes")}
            defaultValue={myth.likes}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            disabled
          />

          <label className="flex items-center font-semibold text-black">
            <input
              type="checkbox"
              name="featured"
              {...register("featured", { required: false })}
              className="mr-2 text-blue-500"
              defaultChecked={myth.featured}
            />
            Featured
          </label>

          {/* Add more fields as needed */}

          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Update Myth
          </button>
        </form>
      </div>
    </div>
  );
};

export default MythUpdateModal;
