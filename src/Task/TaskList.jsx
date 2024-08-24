/* eslint-disable react/prop-types */
import TaskHeading from "./TaskHeading";
import { FaStar } from "react-icons/fa";

export default function TaskList({ tasks, onEdit, onDelete, onFav }) {
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <TaskHeading />
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.id}
              className="border-b border-[#f5f7fa] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
            >
              <td>
                <button onClick={() => onFav(task.id)}>
                  {" "}
                  {task?.isFavorite ? (
                    <FaStar color="yellow" />
                  ) : (
                    <FaStar color="gray" />
                  )}
                </button>
              </td>
              <td>{task?.title}</td>
              <td>{task?.description}</td>
              <td>
                <ul className="flex justify-center gap-1.5 flex-wrap">
                  {task?.tags.map((tag) => (
                    <li key={tag}>
                      <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </td>
              <td>{task.priority}</td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  <button
                    className="text-red-500"
                    onClick={() => onDelete(task.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-blue-500"
                    onClick={() => onEdit(task)}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
